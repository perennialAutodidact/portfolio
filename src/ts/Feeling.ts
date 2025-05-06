export type Feeling = {
  name: string;
  children: Feeling[] | null;
}

export type Feelings = Feeling[]

