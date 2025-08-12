import { prismaClient } from "~/prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { COLOR_PALETTES } from "@/app/tools/feelings/utilities/constants";
import chroma from "chroma-js";
import {
  ColorHSL,
  ColorPalettes,
  ColorThemeNames,
  CoreFeelingName,
  FeelingsCategory,
} from "@/ts/Feeling";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const colorTheme = searchParams.get("colorTheme");
    const feelingsCategory = searchParams.get("feelingsCategory");

    if (!colorTheme || !feelingsCategory)
      return NextResponse.json({
        error: "Missing colorTheme or feelingsCategory URL params",
        status: 401,
      });

    const coreFeelings = await prismaClient.coreFeeling.findMany({
      where: { category: feelingsCategory },
      include: { secondaryFeelings: { include: { leafFeelings: true } } },
    });

    const getBaseColor = (
      feelingCategory: FeelingsCategory,
      feelingName: CoreFeelingName,
      colorTheme: ColorThemeNames,
    ): ColorHSL => {
      const [h, s, l] = chroma(
        COLOR_PALETTES[feelingCategory][colorTheme][
          feelingName as keyof ColorPalettes[typeof feelingCategory][typeof colorTheme]
        ],
      ).hsl();
      return { h, s, l };
    };

    const feelings = coreFeelings.reduce((feelings, coreFeeling) => {
      const { h, s, l } = getBaseColor(
        feelingsCategory as FeelingsCategory,
        coreFeeling.name as CoreFeelingName,
        colorTheme as ColorThemeNames,
      );

      return {
        ...feelings,
        [coreFeeling.name]: {
          name: coreFeeling.name,
          baseColor: { h, s, l },
          secondaryFeelings: coreFeeling.secondaryFeelings.map(
            (secondaryFeeling, i) => {
              const darknessScale = i % 2 === 0 ? 0.3 : 0.6;
              const [h2, s2, l2] = chroma({ h, s, l })
                .darken(darknessScale)
                .hsl();
              return {
                name: secondaryFeeling.name,
                color: { h: h2, s: s2, l: l2 },
                leafFeelings: secondaryFeeling.leafFeelings.map(
                  (leafFeeling, j) => {
                    const darknessScale = j % 2 === 0 ? 0 : 0.3;
                    const [h3, s3, l3] = chroma({ h, s, l })
                      .darken(darknessScale)
                      .hsl();
                    return {
                      name: leafFeeling.name,
                      color: { h: h3, s: s3, l: l3 },
                    };
                  },
                ),
              };
            },
          ),
        },
      };
    }, {});

    return NextResponse.json(feelings);
  } catch (error: any) {
    return NextResponse.json({ status: 500, error });
  }
}
