import { prismaClient } from "~/prisma/client";

import { createReadStream } from "node:fs";
import { parse } from "csv-parse";

const __dirname = new URL(".", import.meta.url).pathname;

const processFile = async (fileName: string) => {
  const records = [];
  const parser = createReadStream(`${__dirname}/${fileName}_feelings.csv`).pipe(
    parse({}),
  );
  for await (const record of parser) {
    // Work with each record
    records.push(record);
  }
  return records;
};

type FeelingsData = {
  name: string;
  category: string;
  secondaryFeelings: {
    create: {
      name: string;
      leafFeelings: {
        create: {
          name: string;
        }[];
      };
    }[];
  };
}[];

(async () => {
  const coreFeelings = await processFile("core");
  const secondaryFeelings = await processFile("secondary");
  const leafFeelings = await processFile("leaf");

  const feelingsData: FeelingsData = coreFeelings
    .slice(1)
    .map((coreFeeling) => ({
      name: coreFeeling[1],
      category: coreFeeling[2],
      secondaryFeelings: {
        create: secondaryFeelings
          .filter((secondaryFeeling) => secondaryFeeling[2] === coreFeeling[0])
          .map((secondaryFeeling) => ({
            name: secondaryFeeling[1],
            leafFeelings: {
              create: leafFeelings
                .filter((leafFeeling) => leafFeeling[2] === secondaryFeeling[0])
                .map((leafFeeling) => ({
                  name: leafFeeling[1],
                })), // end leafFeelings map
            },
          })), // end secondaryFeelings map
      },
    })); // end coreFeelings map

  await prismaClient.leafFeeling.deleteMany();
  await prismaClient.secondaryFeeling.deleteMany();
  await prismaClient.coreFeeling.deleteMany();

  for (const feeling of feelingsData) {
    await prismaClient.coreFeeling.create({
      data: feeling,
    });
  }
})();
