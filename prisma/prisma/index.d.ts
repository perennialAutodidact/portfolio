
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CoreFeeling
 * 
 */
export type CoreFeeling = $Result.DefaultSelection<Prisma.$CoreFeelingPayload>
/**
 * Model SecondaryFeeling
 * 
 */
export type SecondaryFeeling = $Result.DefaultSelection<Prisma.$SecondaryFeelingPayload>
/**
 * Model LeafFeeling
 * 
 */
export type LeafFeeling = $Result.DefaultSelection<Prisma.$LeafFeelingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CoreFeelings
 * const coreFeelings = await prisma.coreFeeling.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CoreFeelings
   * const coreFeelings = await prisma.coreFeeling.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.coreFeeling`: Exposes CRUD operations for the **CoreFeeling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoreFeelings
    * const coreFeelings = await prisma.coreFeeling.findMany()
    * ```
    */
  get coreFeeling(): Prisma.CoreFeelingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secondaryFeeling`: Exposes CRUD operations for the **SecondaryFeeling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecondaryFeelings
    * const secondaryFeelings = await prisma.secondaryFeeling.findMany()
    * ```
    */
  get secondaryFeeling(): Prisma.SecondaryFeelingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leafFeeling`: Exposes CRUD operations for the **LeafFeeling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeafFeelings
    * const leafFeelings = await prisma.leafFeeling.findMany()
    * ```
    */
  get leafFeeling(): Prisma.LeafFeelingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CoreFeeling: 'CoreFeeling',
    SecondaryFeeling: 'SecondaryFeeling',
    LeafFeeling: 'LeafFeeling'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "coreFeeling" | "secondaryFeeling" | "leafFeeling"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CoreFeeling: {
        payload: Prisma.$CoreFeelingPayload<ExtArgs>
        fields: Prisma.CoreFeelingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoreFeelingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoreFeelingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>
          }
          findFirst: {
            args: Prisma.CoreFeelingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoreFeelingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>
          }
          findMany: {
            args: Prisma.CoreFeelingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>[]
          }
          create: {
            args: Prisma.CoreFeelingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>
          }
          createMany: {
            args: Prisma.CoreFeelingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoreFeelingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>[]
          }
          delete: {
            args: Prisma.CoreFeelingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>
          }
          update: {
            args: Prisma.CoreFeelingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>
          }
          deleteMany: {
            args: Prisma.CoreFeelingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoreFeelingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoreFeelingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>[]
          }
          upsert: {
            args: Prisma.CoreFeelingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreFeelingPayload>
          }
          aggregate: {
            args: Prisma.CoreFeelingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoreFeeling>
          }
          groupBy: {
            args: Prisma.CoreFeelingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoreFeelingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoreFeelingCountArgs<ExtArgs>
            result: $Utils.Optional<CoreFeelingCountAggregateOutputType> | number
          }
        }
      }
      SecondaryFeeling: {
        payload: Prisma.$SecondaryFeelingPayload<ExtArgs>
        fields: Prisma.SecondaryFeelingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecondaryFeelingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecondaryFeelingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>
          }
          findFirst: {
            args: Prisma.SecondaryFeelingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecondaryFeelingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>
          }
          findMany: {
            args: Prisma.SecondaryFeelingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>[]
          }
          create: {
            args: Prisma.SecondaryFeelingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>
          }
          createMany: {
            args: Prisma.SecondaryFeelingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecondaryFeelingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>[]
          }
          delete: {
            args: Prisma.SecondaryFeelingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>
          }
          update: {
            args: Prisma.SecondaryFeelingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>
          }
          deleteMany: {
            args: Prisma.SecondaryFeelingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecondaryFeelingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecondaryFeelingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>[]
          }
          upsert: {
            args: Prisma.SecondaryFeelingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryFeelingPayload>
          }
          aggregate: {
            args: Prisma.SecondaryFeelingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecondaryFeeling>
          }
          groupBy: {
            args: Prisma.SecondaryFeelingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecondaryFeelingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecondaryFeelingCountArgs<ExtArgs>
            result: $Utils.Optional<SecondaryFeelingCountAggregateOutputType> | number
          }
        }
      }
      LeafFeeling: {
        payload: Prisma.$LeafFeelingPayload<ExtArgs>
        fields: Prisma.LeafFeelingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeafFeelingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeafFeelingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>
          }
          findFirst: {
            args: Prisma.LeafFeelingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeafFeelingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>
          }
          findMany: {
            args: Prisma.LeafFeelingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>[]
          }
          create: {
            args: Prisma.LeafFeelingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>
          }
          createMany: {
            args: Prisma.LeafFeelingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeafFeelingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>[]
          }
          delete: {
            args: Prisma.LeafFeelingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>
          }
          update: {
            args: Prisma.LeafFeelingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>
          }
          deleteMany: {
            args: Prisma.LeafFeelingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeafFeelingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeafFeelingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>[]
          }
          upsert: {
            args: Prisma.LeafFeelingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafFeelingPayload>
          }
          aggregate: {
            args: Prisma.LeafFeelingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeafFeeling>
          }
          groupBy: {
            args: Prisma.LeafFeelingGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeafFeelingGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeafFeelingCountArgs<ExtArgs>
            result: $Utils.Optional<LeafFeelingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    coreFeeling?: CoreFeelingOmit
    secondaryFeeling?: SecondaryFeelingOmit
    leafFeeling?: LeafFeelingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CoreFeelingCountOutputType
   */

  export type CoreFeelingCountOutputType = {
    secondaryFeelings: number
  }

  export type CoreFeelingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secondaryFeelings?: boolean | CoreFeelingCountOutputTypeCountSecondaryFeelingsArgs
  }

  // Custom InputTypes
  /**
   * CoreFeelingCountOutputType without action
   */
  export type CoreFeelingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeelingCountOutputType
     */
    select?: CoreFeelingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoreFeelingCountOutputType without action
   */
  export type CoreFeelingCountOutputTypeCountSecondaryFeelingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecondaryFeelingWhereInput
  }


  /**
   * Count Type SecondaryFeelingCountOutputType
   */

  export type SecondaryFeelingCountOutputType = {
    leafFeelings: number
  }

  export type SecondaryFeelingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leafFeelings?: boolean | SecondaryFeelingCountOutputTypeCountLeafFeelingsArgs
  }

  // Custom InputTypes
  /**
   * SecondaryFeelingCountOutputType without action
   */
  export type SecondaryFeelingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeelingCountOutputType
     */
    select?: SecondaryFeelingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecondaryFeelingCountOutputType without action
   */
  export type SecondaryFeelingCountOutputTypeCountLeafFeelingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafFeelingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CoreFeeling
   */

  export type AggregateCoreFeeling = {
    _count: CoreFeelingCountAggregateOutputType | null
    _avg: CoreFeelingAvgAggregateOutputType | null
    _sum: CoreFeelingSumAggregateOutputType | null
    _min: CoreFeelingMinAggregateOutputType | null
    _max: CoreFeelingMaxAggregateOutputType | null
  }

  export type CoreFeelingAvgAggregateOutputType = {
    id: number | null
  }

  export type CoreFeelingSumAggregateOutputType = {
    id: number | null
  }

  export type CoreFeelingMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type CoreFeelingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type CoreFeelingCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type CoreFeelingAvgAggregateInputType = {
    id?: true
  }

  export type CoreFeelingSumAggregateInputType = {
    id?: true
  }

  export type CoreFeelingMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type CoreFeelingMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type CoreFeelingCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type CoreFeelingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoreFeeling to aggregate.
     */
    where?: CoreFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreFeelings to fetch.
     */
    orderBy?: CoreFeelingOrderByWithRelationInput | CoreFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoreFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoreFeelings
    **/
    _count?: true | CoreFeelingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoreFeelingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoreFeelingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoreFeelingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoreFeelingMaxAggregateInputType
  }

  export type GetCoreFeelingAggregateType<T extends CoreFeelingAggregateArgs> = {
        [P in keyof T & keyof AggregateCoreFeeling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoreFeeling[P]>
      : GetScalarType<T[P], AggregateCoreFeeling[P]>
  }




  export type CoreFeelingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoreFeelingWhereInput
    orderBy?: CoreFeelingOrderByWithAggregationInput | CoreFeelingOrderByWithAggregationInput[]
    by: CoreFeelingScalarFieldEnum[] | CoreFeelingScalarFieldEnum
    having?: CoreFeelingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoreFeelingCountAggregateInputType | true
    _avg?: CoreFeelingAvgAggregateInputType
    _sum?: CoreFeelingSumAggregateInputType
    _min?: CoreFeelingMinAggregateInputType
    _max?: CoreFeelingMaxAggregateInputType
  }

  export type CoreFeelingGroupByOutputType = {
    id: number
    name: string
    category: string
    _count: CoreFeelingCountAggregateOutputType | null
    _avg: CoreFeelingAvgAggregateOutputType | null
    _sum: CoreFeelingSumAggregateOutputType | null
    _min: CoreFeelingMinAggregateOutputType | null
    _max: CoreFeelingMaxAggregateOutputType | null
  }

  type GetCoreFeelingGroupByPayload<T extends CoreFeelingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoreFeelingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoreFeelingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoreFeelingGroupByOutputType[P]>
            : GetScalarType<T[P], CoreFeelingGroupByOutputType[P]>
        }
      >
    >


  export type CoreFeelingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    secondaryFeelings?: boolean | CoreFeeling$secondaryFeelingsArgs<ExtArgs>
    _count?: boolean | CoreFeelingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coreFeeling"]>

  export type CoreFeelingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["coreFeeling"]>

  export type CoreFeelingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["coreFeeling"]>

  export type CoreFeelingSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type CoreFeelingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["coreFeeling"]>
  export type CoreFeelingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secondaryFeelings?: boolean | CoreFeeling$secondaryFeelingsArgs<ExtArgs>
    _count?: boolean | CoreFeelingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoreFeelingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoreFeelingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoreFeelingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoreFeeling"
    objects: {
      secondaryFeelings: Prisma.$SecondaryFeelingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
    }, ExtArgs["result"]["coreFeeling"]>
    composites: {}
  }

  type CoreFeelingGetPayload<S extends boolean | null | undefined | CoreFeelingDefaultArgs> = $Result.GetResult<Prisma.$CoreFeelingPayload, S>

  type CoreFeelingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoreFeelingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoreFeelingCountAggregateInputType | true
    }

  export interface CoreFeelingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoreFeeling'], meta: { name: 'CoreFeeling' } }
    /**
     * Find zero or one CoreFeeling that matches the filter.
     * @param {CoreFeelingFindUniqueArgs} args - Arguments to find a CoreFeeling
     * @example
     * // Get one CoreFeeling
     * const coreFeeling = await prisma.coreFeeling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoreFeelingFindUniqueArgs>(args: SelectSubset<T, CoreFeelingFindUniqueArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoreFeeling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoreFeelingFindUniqueOrThrowArgs} args - Arguments to find a CoreFeeling
     * @example
     * // Get one CoreFeeling
     * const coreFeeling = await prisma.coreFeeling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoreFeelingFindUniqueOrThrowArgs>(args: SelectSubset<T, CoreFeelingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoreFeeling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingFindFirstArgs} args - Arguments to find a CoreFeeling
     * @example
     * // Get one CoreFeeling
     * const coreFeeling = await prisma.coreFeeling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoreFeelingFindFirstArgs>(args?: SelectSubset<T, CoreFeelingFindFirstArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoreFeeling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingFindFirstOrThrowArgs} args - Arguments to find a CoreFeeling
     * @example
     * // Get one CoreFeeling
     * const coreFeeling = await prisma.coreFeeling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoreFeelingFindFirstOrThrowArgs>(args?: SelectSubset<T, CoreFeelingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoreFeelings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoreFeelings
     * const coreFeelings = await prisma.coreFeeling.findMany()
     * 
     * // Get first 10 CoreFeelings
     * const coreFeelings = await prisma.coreFeeling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coreFeelingWithIdOnly = await prisma.coreFeeling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoreFeelingFindManyArgs>(args?: SelectSubset<T, CoreFeelingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoreFeeling.
     * @param {CoreFeelingCreateArgs} args - Arguments to create a CoreFeeling.
     * @example
     * // Create one CoreFeeling
     * const CoreFeeling = await prisma.coreFeeling.create({
     *   data: {
     *     // ... data to create a CoreFeeling
     *   }
     * })
     * 
     */
    create<T extends CoreFeelingCreateArgs>(args: SelectSubset<T, CoreFeelingCreateArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoreFeelings.
     * @param {CoreFeelingCreateManyArgs} args - Arguments to create many CoreFeelings.
     * @example
     * // Create many CoreFeelings
     * const coreFeeling = await prisma.coreFeeling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoreFeelingCreateManyArgs>(args?: SelectSubset<T, CoreFeelingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoreFeelings and returns the data saved in the database.
     * @param {CoreFeelingCreateManyAndReturnArgs} args - Arguments to create many CoreFeelings.
     * @example
     * // Create many CoreFeelings
     * const coreFeeling = await prisma.coreFeeling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoreFeelings and only return the `id`
     * const coreFeelingWithIdOnly = await prisma.coreFeeling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoreFeelingCreateManyAndReturnArgs>(args?: SelectSubset<T, CoreFeelingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoreFeeling.
     * @param {CoreFeelingDeleteArgs} args - Arguments to delete one CoreFeeling.
     * @example
     * // Delete one CoreFeeling
     * const CoreFeeling = await prisma.coreFeeling.delete({
     *   where: {
     *     // ... filter to delete one CoreFeeling
     *   }
     * })
     * 
     */
    delete<T extends CoreFeelingDeleteArgs>(args: SelectSubset<T, CoreFeelingDeleteArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoreFeeling.
     * @param {CoreFeelingUpdateArgs} args - Arguments to update one CoreFeeling.
     * @example
     * // Update one CoreFeeling
     * const coreFeeling = await prisma.coreFeeling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoreFeelingUpdateArgs>(args: SelectSubset<T, CoreFeelingUpdateArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoreFeelings.
     * @param {CoreFeelingDeleteManyArgs} args - Arguments to filter CoreFeelings to delete.
     * @example
     * // Delete a few CoreFeelings
     * const { count } = await prisma.coreFeeling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoreFeelingDeleteManyArgs>(args?: SelectSubset<T, CoreFeelingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoreFeelings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoreFeelings
     * const coreFeeling = await prisma.coreFeeling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoreFeelingUpdateManyArgs>(args: SelectSubset<T, CoreFeelingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoreFeelings and returns the data updated in the database.
     * @param {CoreFeelingUpdateManyAndReturnArgs} args - Arguments to update many CoreFeelings.
     * @example
     * // Update many CoreFeelings
     * const coreFeeling = await prisma.coreFeeling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoreFeelings and only return the `id`
     * const coreFeelingWithIdOnly = await prisma.coreFeeling.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoreFeelingUpdateManyAndReturnArgs>(args: SelectSubset<T, CoreFeelingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoreFeeling.
     * @param {CoreFeelingUpsertArgs} args - Arguments to update or create a CoreFeeling.
     * @example
     * // Update or create a CoreFeeling
     * const coreFeeling = await prisma.coreFeeling.upsert({
     *   create: {
     *     // ... data to create a CoreFeeling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoreFeeling we want to update
     *   }
     * })
     */
    upsert<T extends CoreFeelingUpsertArgs>(args: SelectSubset<T, CoreFeelingUpsertArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoreFeelings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingCountArgs} args - Arguments to filter CoreFeelings to count.
     * @example
     * // Count the number of CoreFeelings
     * const count = await prisma.coreFeeling.count({
     *   where: {
     *     // ... the filter for the CoreFeelings we want to count
     *   }
     * })
    **/
    count<T extends CoreFeelingCountArgs>(
      args?: Subset<T, CoreFeelingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoreFeelingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoreFeeling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoreFeelingAggregateArgs>(args: Subset<T, CoreFeelingAggregateArgs>): Prisma.PrismaPromise<GetCoreFeelingAggregateType<T>>

    /**
     * Group by CoreFeeling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreFeelingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoreFeelingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoreFeelingGroupByArgs['orderBy'] }
        : { orderBy?: CoreFeelingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoreFeelingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoreFeelingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoreFeeling model
   */
  readonly fields: CoreFeelingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoreFeeling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoreFeelingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    secondaryFeelings<T extends CoreFeeling$secondaryFeelingsArgs<ExtArgs> = {}>(args?: Subset<T, CoreFeeling$secondaryFeelingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoreFeeling model
   */
  interface CoreFeelingFieldRefs {
    readonly id: FieldRef<"CoreFeeling", 'Int'>
    readonly name: FieldRef<"CoreFeeling", 'String'>
    readonly category: FieldRef<"CoreFeeling", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CoreFeeling findUnique
   */
  export type CoreFeelingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * Filter, which CoreFeeling to fetch.
     */
    where: CoreFeelingWhereUniqueInput
  }

  /**
   * CoreFeeling findUniqueOrThrow
   */
  export type CoreFeelingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * Filter, which CoreFeeling to fetch.
     */
    where: CoreFeelingWhereUniqueInput
  }

  /**
   * CoreFeeling findFirst
   */
  export type CoreFeelingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * Filter, which CoreFeeling to fetch.
     */
    where?: CoreFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreFeelings to fetch.
     */
    orderBy?: CoreFeelingOrderByWithRelationInput | CoreFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoreFeelings.
     */
    cursor?: CoreFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoreFeelings.
     */
    distinct?: CoreFeelingScalarFieldEnum | CoreFeelingScalarFieldEnum[]
  }

  /**
   * CoreFeeling findFirstOrThrow
   */
  export type CoreFeelingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * Filter, which CoreFeeling to fetch.
     */
    where?: CoreFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreFeelings to fetch.
     */
    orderBy?: CoreFeelingOrderByWithRelationInput | CoreFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoreFeelings.
     */
    cursor?: CoreFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoreFeelings.
     */
    distinct?: CoreFeelingScalarFieldEnum | CoreFeelingScalarFieldEnum[]
  }

  /**
   * CoreFeeling findMany
   */
  export type CoreFeelingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * Filter, which CoreFeelings to fetch.
     */
    where?: CoreFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreFeelings to fetch.
     */
    orderBy?: CoreFeelingOrderByWithRelationInput | CoreFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoreFeelings.
     */
    cursor?: CoreFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreFeelings.
     */
    skip?: number
    distinct?: CoreFeelingScalarFieldEnum | CoreFeelingScalarFieldEnum[]
  }

  /**
   * CoreFeeling create
   */
  export type CoreFeelingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * The data needed to create a CoreFeeling.
     */
    data: XOR<CoreFeelingCreateInput, CoreFeelingUncheckedCreateInput>
  }

  /**
   * CoreFeeling createMany
   */
  export type CoreFeelingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoreFeelings.
     */
    data: CoreFeelingCreateManyInput | CoreFeelingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoreFeeling createManyAndReturn
   */
  export type CoreFeelingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * The data used to create many CoreFeelings.
     */
    data: CoreFeelingCreateManyInput | CoreFeelingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoreFeeling update
   */
  export type CoreFeelingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * The data needed to update a CoreFeeling.
     */
    data: XOR<CoreFeelingUpdateInput, CoreFeelingUncheckedUpdateInput>
    /**
     * Choose, which CoreFeeling to update.
     */
    where: CoreFeelingWhereUniqueInput
  }

  /**
   * CoreFeeling updateMany
   */
  export type CoreFeelingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoreFeelings.
     */
    data: XOR<CoreFeelingUpdateManyMutationInput, CoreFeelingUncheckedUpdateManyInput>
    /**
     * Filter which CoreFeelings to update
     */
    where?: CoreFeelingWhereInput
    /**
     * Limit how many CoreFeelings to update.
     */
    limit?: number
  }

  /**
   * CoreFeeling updateManyAndReturn
   */
  export type CoreFeelingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * The data used to update CoreFeelings.
     */
    data: XOR<CoreFeelingUpdateManyMutationInput, CoreFeelingUncheckedUpdateManyInput>
    /**
     * Filter which CoreFeelings to update
     */
    where?: CoreFeelingWhereInput
    /**
     * Limit how many CoreFeelings to update.
     */
    limit?: number
  }

  /**
   * CoreFeeling upsert
   */
  export type CoreFeelingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * The filter to search for the CoreFeeling to update in case it exists.
     */
    where: CoreFeelingWhereUniqueInput
    /**
     * In case the CoreFeeling found by the `where` argument doesn't exist, create a new CoreFeeling with this data.
     */
    create: XOR<CoreFeelingCreateInput, CoreFeelingUncheckedCreateInput>
    /**
     * In case the CoreFeeling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoreFeelingUpdateInput, CoreFeelingUncheckedUpdateInput>
  }

  /**
   * CoreFeeling delete
   */
  export type CoreFeelingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
    /**
     * Filter which CoreFeeling to delete.
     */
    where: CoreFeelingWhereUniqueInput
  }

  /**
   * CoreFeeling deleteMany
   */
  export type CoreFeelingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoreFeelings to delete
     */
    where?: CoreFeelingWhereInput
    /**
     * Limit how many CoreFeelings to delete.
     */
    limit?: number
  }

  /**
   * CoreFeeling.secondaryFeelings
   */
  export type CoreFeeling$secondaryFeelingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    where?: SecondaryFeelingWhereInput
    orderBy?: SecondaryFeelingOrderByWithRelationInput | SecondaryFeelingOrderByWithRelationInput[]
    cursor?: SecondaryFeelingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecondaryFeelingScalarFieldEnum | SecondaryFeelingScalarFieldEnum[]
  }

  /**
   * CoreFeeling without action
   */
  export type CoreFeelingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreFeeling
     */
    select?: CoreFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreFeeling
     */
    omit?: CoreFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoreFeelingInclude<ExtArgs> | null
  }


  /**
   * Model SecondaryFeeling
   */

  export type AggregateSecondaryFeeling = {
    _count: SecondaryFeelingCountAggregateOutputType | null
    _avg: SecondaryFeelingAvgAggregateOutputType | null
    _sum: SecondaryFeelingSumAggregateOutputType | null
    _min: SecondaryFeelingMinAggregateOutputType | null
    _max: SecondaryFeelingMaxAggregateOutputType | null
  }

  export type SecondaryFeelingAvgAggregateOutputType = {
    id: number | null
    coreFeelingId: number | null
  }

  export type SecondaryFeelingSumAggregateOutputType = {
    id: number | null
    coreFeelingId: number | null
  }

  export type SecondaryFeelingMinAggregateOutputType = {
    id: number | null
    name: string | null
    coreFeelingId: number | null
  }

  export type SecondaryFeelingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    coreFeelingId: number | null
  }

  export type SecondaryFeelingCountAggregateOutputType = {
    id: number
    name: number
    coreFeelingId: number
    _all: number
  }


  export type SecondaryFeelingAvgAggregateInputType = {
    id?: true
    coreFeelingId?: true
  }

  export type SecondaryFeelingSumAggregateInputType = {
    id?: true
    coreFeelingId?: true
  }

  export type SecondaryFeelingMinAggregateInputType = {
    id?: true
    name?: true
    coreFeelingId?: true
  }

  export type SecondaryFeelingMaxAggregateInputType = {
    id?: true
    name?: true
    coreFeelingId?: true
  }

  export type SecondaryFeelingCountAggregateInputType = {
    id?: true
    name?: true
    coreFeelingId?: true
    _all?: true
  }

  export type SecondaryFeelingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryFeeling to aggregate.
     */
    where?: SecondaryFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryFeelings to fetch.
     */
    orderBy?: SecondaryFeelingOrderByWithRelationInput | SecondaryFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecondaryFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecondaryFeelings
    **/
    _count?: true | SecondaryFeelingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecondaryFeelingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecondaryFeelingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecondaryFeelingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecondaryFeelingMaxAggregateInputType
  }

  export type GetSecondaryFeelingAggregateType<T extends SecondaryFeelingAggregateArgs> = {
        [P in keyof T & keyof AggregateSecondaryFeeling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecondaryFeeling[P]>
      : GetScalarType<T[P], AggregateSecondaryFeeling[P]>
  }




  export type SecondaryFeelingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecondaryFeelingWhereInput
    orderBy?: SecondaryFeelingOrderByWithAggregationInput | SecondaryFeelingOrderByWithAggregationInput[]
    by: SecondaryFeelingScalarFieldEnum[] | SecondaryFeelingScalarFieldEnum
    having?: SecondaryFeelingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecondaryFeelingCountAggregateInputType | true
    _avg?: SecondaryFeelingAvgAggregateInputType
    _sum?: SecondaryFeelingSumAggregateInputType
    _min?: SecondaryFeelingMinAggregateInputType
    _max?: SecondaryFeelingMaxAggregateInputType
  }

  export type SecondaryFeelingGroupByOutputType = {
    id: number
    name: string
    coreFeelingId: number
    _count: SecondaryFeelingCountAggregateOutputType | null
    _avg: SecondaryFeelingAvgAggregateOutputType | null
    _sum: SecondaryFeelingSumAggregateOutputType | null
    _min: SecondaryFeelingMinAggregateOutputType | null
    _max: SecondaryFeelingMaxAggregateOutputType | null
  }

  type GetSecondaryFeelingGroupByPayload<T extends SecondaryFeelingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecondaryFeelingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecondaryFeelingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecondaryFeelingGroupByOutputType[P]>
            : GetScalarType<T[P], SecondaryFeelingGroupByOutputType[P]>
        }
      >
    >


  export type SecondaryFeelingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coreFeelingId?: boolean
    coreFeeling?: boolean | CoreFeelingDefaultArgs<ExtArgs>
    leafFeelings?: boolean | SecondaryFeeling$leafFeelingsArgs<ExtArgs>
    _count?: boolean | SecondaryFeelingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryFeeling"]>

  export type SecondaryFeelingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coreFeelingId?: boolean
    coreFeeling?: boolean | CoreFeelingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryFeeling"]>

  export type SecondaryFeelingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coreFeelingId?: boolean
    coreFeeling?: boolean | CoreFeelingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryFeeling"]>

  export type SecondaryFeelingSelectScalar = {
    id?: boolean
    name?: boolean
    coreFeelingId?: boolean
  }

  export type SecondaryFeelingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "coreFeelingId", ExtArgs["result"]["secondaryFeeling"]>
  export type SecondaryFeelingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coreFeeling?: boolean | CoreFeelingDefaultArgs<ExtArgs>
    leafFeelings?: boolean | SecondaryFeeling$leafFeelingsArgs<ExtArgs>
    _count?: boolean | SecondaryFeelingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecondaryFeelingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coreFeeling?: boolean | CoreFeelingDefaultArgs<ExtArgs>
  }
  export type SecondaryFeelingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coreFeeling?: boolean | CoreFeelingDefaultArgs<ExtArgs>
  }

  export type $SecondaryFeelingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecondaryFeeling"
    objects: {
      coreFeeling: Prisma.$CoreFeelingPayload<ExtArgs>
      leafFeelings: Prisma.$LeafFeelingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      coreFeelingId: number
    }, ExtArgs["result"]["secondaryFeeling"]>
    composites: {}
  }

  type SecondaryFeelingGetPayload<S extends boolean | null | undefined | SecondaryFeelingDefaultArgs> = $Result.GetResult<Prisma.$SecondaryFeelingPayload, S>

  type SecondaryFeelingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecondaryFeelingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecondaryFeelingCountAggregateInputType | true
    }

  export interface SecondaryFeelingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecondaryFeeling'], meta: { name: 'SecondaryFeeling' } }
    /**
     * Find zero or one SecondaryFeeling that matches the filter.
     * @param {SecondaryFeelingFindUniqueArgs} args - Arguments to find a SecondaryFeeling
     * @example
     * // Get one SecondaryFeeling
     * const secondaryFeeling = await prisma.secondaryFeeling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecondaryFeelingFindUniqueArgs>(args: SelectSubset<T, SecondaryFeelingFindUniqueArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecondaryFeeling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecondaryFeelingFindUniqueOrThrowArgs} args - Arguments to find a SecondaryFeeling
     * @example
     * // Get one SecondaryFeeling
     * const secondaryFeeling = await prisma.secondaryFeeling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecondaryFeelingFindUniqueOrThrowArgs>(args: SelectSubset<T, SecondaryFeelingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecondaryFeeling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingFindFirstArgs} args - Arguments to find a SecondaryFeeling
     * @example
     * // Get one SecondaryFeeling
     * const secondaryFeeling = await prisma.secondaryFeeling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecondaryFeelingFindFirstArgs>(args?: SelectSubset<T, SecondaryFeelingFindFirstArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecondaryFeeling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingFindFirstOrThrowArgs} args - Arguments to find a SecondaryFeeling
     * @example
     * // Get one SecondaryFeeling
     * const secondaryFeeling = await prisma.secondaryFeeling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecondaryFeelingFindFirstOrThrowArgs>(args?: SelectSubset<T, SecondaryFeelingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecondaryFeelings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecondaryFeelings
     * const secondaryFeelings = await prisma.secondaryFeeling.findMany()
     * 
     * // Get first 10 SecondaryFeelings
     * const secondaryFeelings = await prisma.secondaryFeeling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secondaryFeelingWithIdOnly = await prisma.secondaryFeeling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecondaryFeelingFindManyArgs>(args?: SelectSubset<T, SecondaryFeelingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecondaryFeeling.
     * @param {SecondaryFeelingCreateArgs} args - Arguments to create a SecondaryFeeling.
     * @example
     * // Create one SecondaryFeeling
     * const SecondaryFeeling = await prisma.secondaryFeeling.create({
     *   data: {
     *     // ... data to create a SecondaryFeeling
     *   }
     * })
     * 
     */
    create<T extends SecondaryFeelingCreateArgs>(args: SelectSubset<T, SecondaryFeelingCreateArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecondaryFeelings.
     * @param {SecondaryFeelingCreateManyArgs} args - Arguments to create many SecondaryFeelings.
     * @example
     * // Create many SecondaryFeelings
     * const secondaryFeeling = await prisma.secondaryFeeling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecondaryFeelingCreateManyArgs>(args?: SelectSubset<T, SecondaryFeelingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecondaryFeelings and returns the data saved in the database.
     * @param {SecondaryFeelingCreateManyAndReturnArgs} args - Arguments to create many SecondaryFeelings.
     * @example
     * // Create many SecondaryFeelings
     * const secondaryFeeling = await prisma.secondaryFeeling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecondaryFeelings and only return the `id`
     * const secondaryFeelingWithIdOnly = await prisma.secondaryFeeling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecondaryFeelingCreateManyAndReturnArgs>(args?: SelectSubset<T, SecondaryFeelingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecondaryFeeling.
     * @param {SecondaryFeelingDeleteArgs} args - Arguments to delete one SecondaryFeeling.
     * @example
     * // Delete one SecondaryFeeling
     * const SecondaryFeeling = await prisma.secondaryFeeling.delete({
     *   where: {
     *     // ... filter to delete one SecondaryFeeling
     *   }
     * })
     * 
     */
    delete<T extends SecondaryFeelingDeleteArgs>(args: SelectSubset<T, SecondaryFeelingDeleteArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecondaryFeeling.
     * @param {SecondaryFeelingUpdateArgs} args - Arguments to update one SecondaryFeeling.
     * @example
     * // Update one SecondaryFeeling
     * const secondaryFeeling = await prisma.secondaryFeeling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecondaryFeelingUpdateArgs>(args: SelectSubset<T, SecondaryFeelingUpdateArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecondaryFeelings.
     * @param {SecondaryFeelingDeleteManyArgs} args - Arguments to filter SecondaryFeelings to delete.
     * @example
     * // Delete a few SecondaryFeelings
     * const { count } = await prisma.secondaryFeeling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecondaryFeelingDeleteManyArgs>(args?: SelectSubset<T, SecondaryFeelingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryFeelings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecondaryFeelings
     * const secondaryFeeling = await prisma.secondaryFeeling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecondaryFeelingUpdateManyArgs>(args: SelectSubset<T, SecondaryFeelingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryFeelings and returns the data updated in the database.
     * @param {SecondaryFeelingUpdateManyAndReturnArgs} args - Arguments to update many SecondaryFeelings.
     * @example
     * // Update many SecondaryFeelings
     * const secondaryFeeling = await prisma.secondaryFeeling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecondaryFeelings and only return the `id`
     * const secondaryFeelingWithIdOnly = await prisma.secondaryFeeling.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecondaryFeelingUpdateManyAndReturnArgs>(args: SelectSubset<T, SecondaryFeelingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecondaryFeeling.
     * @param {SecondaryFeelingUpsertArgs} args - Arguments to update or create a SecondaryFeeling.
     * @example
     * // Update or create a SecondaryFeeling
     * const secondaryFeeling = await prisma.secondaryFeeling.upsert({
     *   create: {
     *     // ... data to create a SecondaryFeeling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecondaryFeeling we want to update
     *   }
     * })
     */
    upsert<T extends SecondaryFeelingUpsertArgs>(args: SelectSubset<T, SecondaryFeelingUpsertArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecondaryFeelings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingCountArgs} args - Arguments to filter SecondaryFeelings to count.
     * @example
     * // Count the number of SecondaryFeelings
     * const count = await prisma.secondaryFeeling.count({
     *   where: {
     *     // ... the filter for the SecondaryFeelings we want to count
     *   }
     * })
    **/
    count<T extends SecondaryFeelingCountArgs>(
      args?: Subset<T, SecondaryFeelingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecondaryFeelingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecondaryFeeling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecondaryFeelingAggregateArgs>(args: Subset<T, SecondaryFeelingAggregateArgs>): Prisma.PrismaPromise<GetSecondaryFeelingAggregateType<T>>

    /**
     * Group by SecondaryFeeling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryFeelingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecondaryFeelingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecondaryFeelingGroupByArgs['orderBy'] }
        : { orderBy?: SecondaryFeelingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecondaryFeelingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecondaryFeelingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecondaryFeeling model
   */
  readonly fields: SecondaryFeelingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecondaryFeeling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecondaryFeelingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coreFeeling<T extends CoreFeelingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoreFeelingDefaultArgs<ExtArgs>>): Prisma__CoreFeelingClient<$Result.GetResult<Prisma.$CoreFeelingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leafFeelings<T extends SecondaryFeeling$leafFeelingsArgs<ExtArgs> = {}>(args?: Subset<T, SecondaryFeeling$leafFeelingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecondaryFeeling model
   */
  interface SecondaryFeelingFieldRefs {
    readonly id: FieldRef<"SecondaryFeeling", 'Int'>
    readonly name: FieldRef<"SecondaryFeeling", 'String'>
    readonly coreFeelingId: FieldRef<"SecondaryFeeling", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SecondaryFeeling findUnique
   */
  export type SecondaryFeelingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryFeeling to fetch.
     */
    where: SecondaryFeelingWhereUniqueInput
  }

  /**
   * SecondaryFeeling findUniqueOrThrow
   */
  export type SecondaryFeelingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryFeeling to fetch.
     */
    where: SecondaryFeelingWhereUniqueInput
  }

  /**
   * SecondaryFeeling findFirst
   */
  export type SecondaryFeelingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryFeeling to fetch.
     */
    where?: SecondaryFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryFeelings to fetch.
     */
    orderBy?: SecondaryFeelingOrderByWithRelationInput | SecondaryFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryFeelings.
     */
    cursor?: SecondaryFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryFeelings.
     */
    distinct?: SecondaryFeelingScalarFieldEnum | SecondaryFeelingScalarFieldEnum[]
  }

  /**
   * SecondaryFeeling findFirstOrThrow
   */
  export type SecondaryFeelingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryFeeling to fetch.
     */
    where?: SecondaryFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryFeelings to fetch.
     */
    orderBy?: SecondaryFeelingOrderByWithRelationInput | SecondaryFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryFeelings.
     */
    cursor?: SecondaryFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryFeelings.
     */
    distinct?: SecondaryFeelingScalarFieldEnum | SecondaryFeelingScalarFieldEnum[]
  }

  /**
   * SecondaryFeeling findMany
   */
  export type SecondaryFeelingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryFeelings to fetch.
     */
    where?: SecondaryFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryFeelings to fetch.
     */
    orderBy?: SecondaryFeelingOrderByWithRelationInput | SecondaryFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecondaryFeelings.
     */
    cursor?: SecondaryFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryFeelings.
     */
    skip?: number
    distinct?: SecondaryFeelingScalarFieldEnum | SecondaryFeelingScalarFieldEnum[]
  }

  /**
   * SecondaryFeeling create
   */
  export type SecondaryFeelingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * The data needed to create a SecondaryFeeling.
     */
    data: XOR<SecondaryFeelingCreateInput, SecondaryFeelingUncheckedCreateInput>
  }

  /**
   * SecondaryFeeling createMany
   */
  export type SecondaryFeelingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecondaryFeelings.
     */
    data: SecondaryFeelingCreateManyInput | SecondaryFeelingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecondaryFeeling createManyAndReturn
   */
  export type SecondaryFeelingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * The data used to create many SecondaryFeelings.
     */
    data: SecondaryFeelingCreateManyInput | SecondaryFeelingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecondaryFeeling update
   */
  export type SecondaryFeelingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * The data needed to update a SecondaryFeeling.
     */
    data: XOR<SecondaryFeelingUpdateInput, SecondaryFeelingUncheckedUpdateInput>
    /**
     * Choose, which SecondaryFeeling to update.
     */
    where: SecondaryFeelingWhereUniqueInput
  }

  /**
   * SecondaryFeeling updateMany
   */
  export type SecondaryFeelingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecondaryFeelings.
     */
    data: XOR<SecondaryFeelingUpdateManyMutationInput, SecondaryFeelingUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryFeelings to update
     */
    where?: SecondaryFeelingWhereInput
    /**
     * Limit how many SecondaryFeelings to update.
     */
    limit?: number
  }

  /**
   * SecondaryFeeling updateManyAndReturn
   */
  export type SecondaryFeelingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * The data used to update SecondaryFeelings.
     */
    data: XOR<SecondaryFeelingUpdateManyMutationInput, SecondaryFeelingUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryFeelings to update
     */
    where?: SecondaryFeelingWhereInput
    /**
     * Limit how many SecondaryFeelings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecondaryFeeling upsert
   */
  export type SecondaryFeelingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * The filter to search for the SecondaryFeeling to update in case it exists.
     */
    where: SecondaryFeelingWhereUniqueInput
    /**
     * In case the SecondaryFeeling found by the `where` argument doesn't exist, create a new SecondaryFeeling with this data.
     */
    create: XOR<SecondaryFeelingCreateInput, SecondaryFeelingUncheckedCreateInput>
    /**
     * In case the SecondaryFeeling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecondaryFeelingUpdateInput, SecondaryFeelingUncheckedUpdateInput>
  }

  /**
   * SecondaryFeeling delete
   */
  export type SecondaryFeelingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
    /**
     * Filter which SecondaryFeeling to delete.
     */
    where: SecondaryFeelingWhereUniqueInput
  }

  /**
   * SecondaryFeeling deleteMany
   */
  export type SecondaryFeelingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryFeelings to delete
     */
    where?: SecondaryFeelingWhereInput
    /**
     * Limit how many SecondaryFeelings to delete.
     */
    limit?: number
  }

  /**
   * SecondaryFeeling.leafFeelings
   */
  export type SecondaryFeeling$leafFeelingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    where?: LeafFeelingWhereInput
    orderBy?: LeafFeelingOrderByWithRelationInput | LeafFeelingOrderByWithRelationInput[]
    cursor?: LeafFeelingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeafFeelingScalarFieldEnum | LeafFeelingScalarFieldEnum[]
  }

  /**
   * SecondaryFeeling without action
   */
  export type SecondaryFeelingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryFeeling
     */
    select?: SecondaryFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryFeeling
     */
    omit?: SecondaryFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecondaryFeelingInclude<ExtArgs> | null
  }


  /**
   * Model LeafFeeling
   */

  export type AggregateLeafFeeling = {
    _count: LeafFeelingCountAggregateOutputType | null
    _avg: LeafFeelingAvgAggregateOutputType | null
    _sum: LeafFeelingSumAggregateOutputType | null
    _min: LeafFeelingMinAggregateOutputType | null
    _max: LeafFeelingMaxAggregateOutputType | null
  }

  export type LeafFeelingAvgAggregateOutputType = {
    id: number | null
    secondaryFeelingId: number | null
  }

  export type LeafFeelingSumAggregateOutputType = {
    id: number | null
    secondaryFeelingId: number | null
  }

  export type LeafFeelingMinAggregateOutputType = {
    id: number | null
    name: string | null
    secondaryFeelingId: number | null
  }

  export type LeafFeelingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    secondaryFeelingId: number | null
  }

  export type LeafFeelingCountAggregateOutputType = {
    id: number
    name: number
    secondaryFeelingId: number
    _all: number
  }


  export type LeafFeelingAvgAggregateInputType = {
    id?: true
    secondaryFeelingId?: true
  }

  export type LeafFeelingSumAggregateInputType = {
    id?: true
    secondaryFeelingId?: true
  }

  export type LeafFeelingMinAggregateInputType = {
    id?: true
    name?: true
    secondaryFeelingId?: true
  }

  export type LeafFeelingMaxAggregateInputType = {
    id?: true
    name?: true
    secondaryFeelingId?: true
  }

  export type LeafFeelingCountAggregateInputType = {
    id?: true
    name?: true
    secondaryFeelingId?: true
    _all?: true
  }

  export type LeafFeelingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeafFeeling to aggregate.
     */
    where?: LeafFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafFeelings to fetch.
     */
    orderBy?: LeafFeelingOrderByWithRelationInput | LeafFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeafFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeafFeelings
    **/
    _count?: true | LeafFeelingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeafFeelingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeafFeelingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeafFeelingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeafFeelingMaxAggregateInputType
  }

  export type GetLeafFeelingAggregateType<T extends LeafFeelingAggregateArgs> = {
        [P in keyof T & keyof AggregateLeafFeeling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeafFeeling[P]>
      : GetScalarType<T[P], AggregateLeafFeeling[P]>
  }




  export type LeafFeelingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafFeelingWhereInput
    orderBy?: LeafFeelingOrderByWithAggregationInput | LeafFeelingOrderByWithAggregationInput[]
    by: LeafFeelingScalarFieldEnum[] | LeafFeelingScalarFieldEnum
    having?: LeafFeelingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeafFeelingCountAggregateInputType | true
    _avg?: LeafFeelingAvgAggregateInputType
    _sum?: LeafFeelingSumAggregateInputType
    _min?: LeafFeelingMinAggregateInputType
    _max?: LeafFeelingMaxAggregateInputType
  }

  export type LeafFeelingGroupByOutputType = {
    id: number
    name: string
    secondaryFeelingId: number
    _count: LeafFeelingCountAggregateOutputType | null
    _avg: LeafFeelingAvgAggregateOutputType | null
    _sum: LeafFeelingSumAggregateOutputType | null
    _min: LeafFeelingMinAggregateOutputType | null
    _max: LeafFeelingMaxAggregateOutputType | null
  }

  type GetLeafFeelingGroupByPayload<T extends LeafFeelingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeafFeelingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeafFeelingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeafFeelingGroupByOutputType[P]>
            : GetScalarType<T[P], LeafFeelingGroupByOutputType[P]>
        }
      >
    >


  export type LeafFeelingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    secondaryFeelingId?: boolean
    secondaryFeeling?: boolean | SecondaryFeelingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leafFeeling"]>

  export type LeafFeelingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    secondaryFeelingId?: boolean
    secondaryFeeling?: boolean | SecondaryFeelingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leafFeeling"]>

  export type LeafFeelingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    secondaryFeelingId?: boolean
    secondaryFeeling?: boolean | SecondaryFeelingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leafFeeling"]>

  export type LeafFeelingSelectScalar = {
    id?: boolean
    name?: boolean
    secondaryFeelingId?: boolean
  }

  export type LeafFeelingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "secondaryFeelingId", ExtArgs["result"]["leafFeeling"]>
  export type LeafFeelingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secondaryFeeling?: boolean | SecondaryFeelingDefaultArgs<ExtArgs>
  }
  export type LeafFeelingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secondaryFeeling?: boolean | SecondaryFeelingDefaultArgs<ExtArgs>
  }
  export type LeafFeelingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secondaryFeeling?: boolean | SecondaryFeelingDefaultArgs<ExtArgs>
  }

  export type $LeafFeelingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeafFeeling"
    objects: {
      secondaryFeeling: Prisma.$SecondaryFeelingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      secondaryFeelingId: number
    }, ExtArgs["result"]["leafFeeling"]>
    composites: {}
  }

  type LeafFeelingGetPayload<S extends boolean | null | undefined | LeafFeelingDefaultArgs> = $Result.GetResult<Prisma.$LeafFeelingPayload, S>

  type LeafFeelingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeafFeelingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeafFeelingCountAggregateInputType | true
    }

  export interface LeafFeelingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeafFeeling'], meta: { name: 'LeafFeeling' } }
    /**
     * Find zero or one LeafFeeling that matches the filter.
     * @param {LeafFeelingFindUniqueArgs} args - Arguments to find a LeafFeeling
     * @example
     * // Get one LeafFeeling
     * const leafFeeling = await prisma.leafFeeling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeafFeelingFindUniqueArgs>(args: SelectSubset<T, LeafFeelingFindUniqueArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeafFeeling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeafFeelingFindUniqueOrThrowArgs} args - Arguments to find a LeafFeeling
     * @example
     * // Get one LeafFeeling
     * const leafFeeling = await prisma.leafFeeling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeafFeelingFindUniqueOrThrowArgs>(args: SelectSubset<T, LeafFeelingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeafFeeling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingFindFirstArgs} args - Arguments to find a LeafFeeling
     * @example
     * // Get one LeafFeeling
     * const leafFeeling = await prisma.leafFeeling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeafFeelingFindFirstArgs>(args?: SelectSubset<T, LeafFeelingFindFirstArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeafFeeling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingFindFirstOrThrowArgs} args - Arguments to find a LeafFeeling
     * @example
     * // Get one LeafFeeling
     * const leafFeeling = await prisma.leafFeeling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeafFeelingFindFirstOrThrowArgs>(args?: SelectSubset<T, LeafFeelingFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeafFeelings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeafFeelings
     * const leafFeelings = await prisma.leafFeeling.findMany()
     * 
     * // Get first 10 LeafFeelings
     * const leafFeelings = await prisma.leafFeeling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leafFeelingWithIdOnly = await prisma.leafFeeling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeafFeelingFindManyArgs>(args?: SelectSubset<T, LeafFeelingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeafFeeling.
     * @param {LeafFeelingCreateArgs} args - Arguments to create a LeafFeeling.
     * @example
     * // Create one LeafFeeling
     * const LeafFeeling = await prisma.leafFeeling.create({
     *   data: {
     *     // ... data to create a LeafFeeling
     *   }
     * })
     * 
     */
    create<T extends LeafFeelingCreateArgs>(args: SelectSubset<T, LeafFeelingCreateArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeafFeelings.
     * @param {LeafFeelingCreateManyArgs} args - Arguments to create many LeafFeelings.
     * @example
     * // Create many LeafFeelings
     * const leafFeeling = await prisma.leafFeeling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeafFeelingCreateManyArgs>(args?: SelectSubset<T, LeafFeelingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeafFeelings and returns the data saved in the database.
     * @param {LeafFeelingCreateManyAndReturnArgs} args - Arguments to create many LeafFeelings.
     * @example
     * // Create many LeafFeelings
     * const leafFeeling = await prisma.leafFeeling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeafFeelings and only return the `id`
     * const leafFeelingWithIdOnly = await prisma.leafFeeling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeafFeelingCreateManyAndReturnArgs>(args?: SelectSubset<T, LeafFeelingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeafFeeling.
     * @param {LeafFeelingDeleteArgs} args - Arguments to delete one LeafFeeling.
     * @example
     * // Delete one LeafFeeling
     * const LeafFeeling = await prisma.leafFeeling.delete({
     *   where: {
     *     // ... filter to delete one LeafFeeling
     *   }
     * })
     * 
     */
    delete<T extends LeafFeelingDeleteArgs>(args: SelectSubset<T, LeafFeelingDeleteArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeafFeeling.
     * @param {LeafFeelingUpdateArgs} args - Arguments to update one LeafFeeling.
     * @example
     * // Update one LeafFeeling
     * const leafFeeling = await prisma.leafFeeling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeafFeelingUpdateArgs>(args: SelectSubset<T, LeafFeelingUpdateArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeafFeelings.
     * @param {LeafFeelingDeleteManyArgs} args - Arguments to filter LeafFeelings to delete.
     * @example
     * // Delete a few LeafFeelings
     * const { count } = await prisma.leafFeeling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeafFeelingDeleteManyArgs>(args?: SelectSubset<T, LeafFeelingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeafFeelings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeafFeelings
     * const leafFeeling = await prisma.leafFeeling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeafFeelingUpdateManyArgs>(args: SelectSubset<T, LeafFeelingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeafFeelings and returns the data updated in the database.
     * @param {LeafFeelingUpdateManyAndReturnArgs} args - Arguments to update many LeafFeelings.
     * @example
     * // Update many LeafFeelings
     * const leafFeeling = await prisma.leafFeeling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeafFeelings and only return the `id`
     * const leafFeelingWithIdOnly = await prisma.leafFeeling.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeafFeelingUpdateManyAndReturnArgs>(args: SelectSubset<T, LeafFeelingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeafFeeling.
     * @param {LeafFeelingUpsertArgs} args - Arguments to update or create a LeafFeeling.
     * @example
     * // Update or create a LeafFeeling
     * const leafFeeling = await prisma.leafFeeling.upsert({
     *   create: {
     *     // ... data to create a LeafFeeling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeafFeeling we want to update
     *   }
     * })
     */
    upsert<T extends LeafFeelingUpsertArgs>(args: SelectSubset<T, LeafFeelingUpsertArgs<ExtArgs>>): Prisma__LeafFeelingClient<$Result.GetResult<Prisma.$LeafFeelingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeafFeelings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingCountArgs} args - Arguments to filter LeafFeelings to count.
     * @example
     * // Count the number of LeafFeelings
     * const count = await prisma.leafFeeling.count({
     *   where: {
     *     // ... the filter for the LeafFeelings we want to count
     *   }
     * })
    **/
    count<T extends LeafFeelingCountArgs>(
      args?: Subset<T, LeafFeelingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeafFeelingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeafFeeling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeafFeelingAggregateArgs>(args: Subset<T, LeafFeelingAggregateArgs>): Prisma.PrismaPromise<GetLeafFeelingAggregateType<T>>

    /**
     * Group by LeafFeeling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFeelingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeafFeelingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeafFeelingGroupByArgs['orderBy'] }
        : { orderBy?: LeafFeelingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeafFeelingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeafFeelingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeafFeeling model
   */
  readonly fields: LeafFeelingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeafFeeling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeafFeelingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    secondaryFeeling<T extends SecondaryFeelingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecondaryFeelingDefaultArgs<ExtArgs>>): Prisma__SecondaryFeelingClient<$Result.GetResult<Prisma.$SecondaryFeelingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeafFeeling model
   */
  interface LeafFeelingFieldRefs {
    readonly id: FieldRef<"LeafFeeling", 'Int'>
    readonly name: FieldRef<"LeafFeeling", 'String'>
    readonly secondaryFeelingId: FieldRef<"LeafFeeling", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeafFeeling findUnique
   */
  export type LeafFeelingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * Filter, which LeafFeeling to fetch.
     */
    where: LeafFeelingWhereUniqueInput
  }

  /**
   * LeafFeeling findUniqueOrThrow
   */
  export type LeafFeelingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * Filter, which LeafFeeling to fetch.
     */
    where: LeafFeelingWhereUniqueInput
  }

  /**
   * LeafFeeling findFirst
   */
  export type LeafFeelingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * Filter, which LeafFeeling to fetch.
     */
    where?: LeafFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafFeelings to fetch.
     */
    orderBy?: LeafFeelingOrderByWithRelationInput | LeafFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeafFeelings.
     */
    cursor?: LeafFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeafFeelings.
     */
    distinct?: LeafFeelingScalarFieldEnum | LeafFeelingScalarFieldEnum[]
  }

  /**
   * LeafFeeling findFirstOrThrow
   */
  export type LeafFeelingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * Filter, which LeafFeeling to fetch.
     */
    where?: LeafFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafFeelings to fetch.
     */
    orderBy?: LeafFeelingOrderByWithRelationInput | LeafFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeafFeelings.
     */
    cursor?: LeafFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafFeelings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeafFeelings.
     */
    distinct?: LeafFeelingScalarFieldEnum | LeafFeelingScalarFieldEnum[]
  }

  /**
   * LeafFeeling findMany
   */
  export type LeafFeelingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * Filter, which LeafFeelings to fetch.
     */
    where?: LeafFeelingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafFeelings to fetch.
     */
    orderBy?: LeafFeelingOrderByWithRelationInput | LeafFeelingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeafFeelings.
     */
    cursor?: LeafFeelingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafFeelings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafFeelings.
     */
    skip?: number
    distinct?: LeafFeelingScalarFieldEnum | LeafFeelingScalarFieldEnum[]
  }

  /**
   * LeafFeeling create
   */
  export type LeafFeelingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * The data needed to create a LeafFeeling.
     */
    data: XOR<LeafFeelingCreateInput, LeafFeelingUncheckedCreateInput>
  }

  /**
   * LeafFeeling createMany
   */
  export type LeafFeelingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeafFeelings.
     */
    data: LeafFeelingCreateManyInput | LeafFeelingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeafFeeling createManyAndReturn
   */
  export type LeafFeelingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * The data used to create many LeafFeelings.
     */
    data: LeafFeelingCreateManyInput | LeafFeelingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeafFeeling update
   */
  export type LeafFeelingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * The data needed to update a LeafFeeling.
     */
    data: XOR<LeafFeelingUpdateInput, LeafFeelingUncheckedUpdateInput>
    /**
     * Choose, which LeafFeeling to update.
     */
    where: LeafFeelingWhereUniqueInput
  }

  /**
   * LeafFeeling updateMany
   */
  export type LeafFeelingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeafFeelings.
     */
    data: XOR<LeafFeelingUpdateManyMutationInput, LeafFeelingUncheckedUpdateManyInput>
    /**
     * Filter which LeafFeelings to update
     */
    where?: LeafFeelingWhereInput
    /**
     * Limit how many LeafFeelings to update.
     */
    limit?: number
  }

  /**
   * LeafFeeling updateManyAndReturn
   */
  export type LeafFeelingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * The data used to update LeafFeelings.
     */
    data: XOR<LeafFeelingUpdateManyMutationInput, LeafFeelingUncheckedUpdateManyInput>
    /**
     * Filter which LeafFeelings to update
     */
    where?: LeafFeelingWhereInput
    /**
     * Limit how many LeafFeelings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeafFeeling upsert
   */
  export type LeafFeelingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * The filter to search for the LeafFeeling to update in case it exists.
     */
    where: LeafFeelingWhereUniqueInput
    /**
     * In case the LeafFeeling found by the `where` argument doesn't exist, create a new LeafFeeling with this data.
     */
    create: XOR<LeafFeelingCreateInput, LeafFeelingUncheckedCreateInput>
    /**
     * In case the LeafFeeling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeafFeelingUpdateInput, LeafFeelingUncheckedUpdateInput>
  }

  /**
   * LeafFeeling delete
   */
  export type LeafFeelingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
    /**
     * Filter which LeafFeeling to delete.
     */
    where: LeafFeelingWhereUniqueInput
  }

  /**
   * LeafFeeling deleteMany
   */
  export type LeafFeelingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeafFeelings to delete
     */
    where?: LeafFeelingWhereInput
    /**
     * Limit how many LeafFeelings to delete.
     */
    limit?: number
  }

  /**
   * LeafFeeling without action
   */
  export type LeafFeelingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafFeeling
     */
    select?: LeafFeelingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafFeeling
     */
    omit?: LeafFeelingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafFeelingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoreFeelingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type CoreFeelingScalarFieldEnum = (typeof CoreFeelingScalarFieldEnum)[keyof typeof CoreFeelingScalarFieldEnum]


  export const SecondaryFeelingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coreFeelingId: 'coreFeelingId'
  };

  export type SecondaryFeelingScalarFieldEnum = (typeof SecondaryFeelingScalarFieldEnum)[keyof typeof SecondaryFeelingScalarFieldEnum]


  export const LeafFeelingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    secondaryFeelingId: 'secondaryFeelingId'
  };

  export type LeafFeelingScalarFieldEnum = (typeof LeafFeelingScalarFieldEnum)[keyof typeof LeafFeelingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CoreFeelingWhereInput = {
    AND?: CoreFeelingWhereInput | CoreFeelingWhereInput[]
    OR?: CoreFeelingWhereInput[]
    NOT?: CoreFeelingWhereInput | CoreFeelingWhereInput[]
    id?: IntFilter<"CoreFeeling"> | number
    name?: StringFilter<"CoreFeeling"> | string
    category?: StringFilter<"CoreFeeling"> | string
    secondaryFeelings?: SecondaryFeelingListRelationFilter
  }

  export type CoreFeelingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    secondaryFeelings?: SecondaryFeelingOrderByRelationAggregateInput
  }

  export type CoreFeelingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CoreFeelingWhereInput | CoreFeelingWhereInput[]
    OR?: CoreFeelingWhereInput[]
    NOT?: CoreFeelingWhereInput | CoreFeelingWhereInput[]
    category?: StringFilter<"CoreFeeling"> | string
    secondaryFeelings?: SecondaryFeelingListRelationFilter
  }, "id" | "name">

  export type CoreFeelingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: CoreFeelingCountOrderByAggregateInput
    _avg?: CoreFeelingAvgOrderByAggregateInput
    _max?: CoreFeelingMaxOrderByAggregateInput
    _min?: CoreFeelingMinOrderByAggregateInput
    _sum?: CoreFeelingSumOrderByAggregateInput
  }

  export type CoreFeelingScalarWhereWithAggregatesInput = {
    AND?: CoreFeelingScalarWhereWithAggregatesInput | CoreFeelingScalarWhereWithAggregatesInput[]
    OR?: CoreFeelingScalarWhereWithAggregatesInput[]
    NOT?: CoreFeelingScalarWhereWithAggregatesInput | CoreFeelingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoreFeeling"> | number
    name?: StringWithAggregatesFilter<"CoreFeeling"> | string
    category?: StringWithAggregatesFilter<"CoreFeeling"> | string
  }

  export type SecondaryFeelingWhereInput = {
    AND?: SecondaryFeelingWhereInput | SecondaryFeelingWhereInput[]
    OR?: SecondaryFeelingWhereInput[]
    NOT?: SecondaryFeelingWhereInput | SecondaryFeelingWhereInput[]
    id?: IntFilter<"SecondaryFeeling"> | number
    name?: StringFilter<"SecondaryFeeling"> | string
    coreFeelingId?: IntFilter<"SecondaryFeeling"> | number
    coreFeeling?: XOR<CoreFeelingScalarRelationFilter, CoreFeelingWhereInput>
    leafFeelings?: LeafFeelingListRelationFilter
  }

  export type SecondaryFeelingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coreFeelingId?: SortOrder
    coreFeeling?: CoreFeelingOrderByWithRelationInput
    leafFeelings?: LeafFeelingOrderByRelationAggregateInput
  }

  export type SecondaryFeelingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SecondaryFeelingWhereInput | SecondaryFeelingWhereInput[]
    OR?: SecondaryFeelingWhereInput[]
    NOT?: SecondaryFeelingWhereInput | SecondaryFeelingWhereInput[]
    coreFeelingId?: IntFilter<"SecondaryFeeling"> | number
    coreFeeling?: XOR<CoreFeelingScalarRelationFilter, CoreFeelingWhereInput>
    leafFeelings?: LeafFeelingListRelationFilter
  }, "id" | "name">

  export type SecondaryFeelingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coreFeelingId?: SortOrder
    _count?: SecondaryFeelingCountOrderByAggregateInput
    _avg?: SecondaryFeelingAvgOrderByAggregateInput
    _max?: SecondaryFeelingMaxOrderByAggregateInput
    _min?: SecondaryFeelingMinOrderByAggregateInput
    _sum?: SecondaryFeelingSumOrderByAggregateInput
  }

  export type SecondaryFeelingScalarWhereWithAggregatesInput = {
    AND?: SecondaryFeelingScalarWhereWithAggregatesInput | SecondaryFeelingScalarWhereWithAggregatesInput[]
    OR?: SecondaryFeelingScalarWhereWithAggregatesInput[]
    NOT?: SecondaryFeelingScalarWhereWithAggregatesInput | SecondaryFeelingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecondaryFeeling"> | number
    name?: StringWithAggregatesFilter<"SecondaryFeeling"> | string
    coreFeelingId?: IntWithAggregatesFilter<"SecondaryFeeling"> | number
  }

  export type LeafFeelingWhereInput = {
    AND?: LeafFeelingWhereInput | LeafFeelingWhereInput[]
    OR?: LeafFeelingWhereInput[]
    NOT?: LeafFeelingWhereInput | LeafFeelingWhereInput[]
    id?: IntFilter<"LeafFeeling"> | number
    name?: StringFilter<"LeafFeeling"> | string
    secondaryFeelingId?: IntFilter<"LeafFeeling"> | number
    secondaryFeeling?: XOR<SecondaryFeelingScalarRelationFilter, SecondaryFeelingWhereInput>
  }

  export type LeafFeelingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryFeelingId?: SortOrder
    secondaryFeeling?: SecondaryFeelingOrderByWithRelationInput
  }

  export type LeafFeelingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LeafFeelingWhereInput | LeafFeelingWhereInput[]
    OR?: LeafFeelingWhereInput[]
    NOT?: LeafFeelingWhereInput | LeafFeelingWhereInput[]
    secondaryFeelingId?: IntFilter<"LeafFeeling"> | number
    secondaryFeeling?: XOR<SecondaryFeelingScalarRelationFilter, SecondaryFeelingWhereInput>
  }, "id" | "name">

  export type LeafFeelingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryFeelingId?: SortOrder
    _count?: LeafFeelingCountOrderByAggregateInput
    _avg?: LeafFeelingAvgOrderByAggregateInput
    _max?: LeafFeelingMaxOrderByAggregateInput
    _min?: LeafFeelingMinOrderByAggregateInput
    _sum?: LeafFeelingSumOrderByAggregateInput
  }

  export type LeafFeelingScalarWhereWithAggregatesInput = {
    AND?: LeafFeelingScalarWhereWithAggregatesInput | LeafFeelingScalarWhereWithAggregatesInput[]
    OR?: LeafFeelingScalarWhereWithAggregatesInput[]
    NOT?: LeafFeelingScalarWhereWithAggregatesInput | LeafFeelingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeafFeeling"> | number
    name?: StringWithAggregatesFilter<"LeafFeeling"> | string
    secondaryFeelingId?: IntWithAggregatesFilter<"LeafFeeling"> | number
  }

  export type CoreFeelingCreateInput = {
    name: string
    category: string
    secondaryFeelings?: SecondaryFeelingCreateNestedManyWithoutCoreFeelingInput
  }

  export type CoreFeelingUncheckedCreateInput = {
    id?: number
    name: string
    category: string
    secondaryFeelings?: SecondaryFeelingUncheckedCreateNestedManyWithoutCoreFeelingInput
  }

  export type CoreFeelingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    secondaryFeelings?: SecondaryFeelingUpdateManyWithoutCoreFeelingNestedInput
  }

  export type CoreFeelingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    secondaryFeelings?: SecondaryFeelingUncheckedUpdateManyWithoutCoreFeelingNestedInput
  }

  export type CoreFeelingCreateManyInput = {
    id?: number
    name: string
    category: string
  }

  export type CoreFeelingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CoreFeelingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SecondaryFeelingCreateInput = {
    name: string
    coreFeeling: CoreFeelingCreateNestedOneWithoutSecondaryFeelingsInput
    leafFeelings?: LeafFeelingCreateNestedManyWithoutSecondaryFeelingInput
  }

  export type SecondaryFeelingUncheckedCreateInput = {
    id?: number
    name: string
    coreFeelingId: number
    leafFeelings?: LeafFeelingUncheckedCreateNestedManyWithoutSecondaryFeelingInput
  }

  export type SecondaryFeelingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    coreFeeling?: CoreFeelingUpdateOneRequiredWithoutSecondaryFeelingsNestedInput
    leafFeelings?: LeafFeelingUpdateManyWithoutSecondaryFeelingNestedInput
  }

  export type SecondaryFeelingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coreFeelingId?: IntFieldUpdateOperationsInput | number
    leafFeelings?: LeafFeelingUncheckedUpdateManyWithoutSecondaryFeelingNestedInput
  }

  export type SecondaryFeelingCreateManyInput = {
    id?: number
    name: string
    coreFeelingId: number
  }

  export type SecondaryFeelingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SecondaryFeelingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coreFeelingId?: IntFieldUpdateOperationsInput | number
  }

  export type LeafFeelingCreateInput = {
    name: string
    secondaryFeeling: SecondaryFeelingCreateNestedOneWithoutLeafFeelingsInput
  }

  export type LeafFeelingUncheckedCreateInput = {
    id?: number
    name: string
    secondaryFeelingId: number
  }

  export type LeafFeelingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryFeeling?: SecondaryFeelingUpdateOneRequiredWithoutLeafFeelingsNestedInput
  }

  export type LeafFeelingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryFeelingId?: IntFieldUpdateOperationsInput | number
  }

  export type LeafFeelingCreateManyInput = {
    id?: number
    name: string
    secondaryFeelingId: number
  }

  export type LeafFeelingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeafFeelingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryFeelingId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SecondaryFeelingListRelationFilter = {
    every?: SecondaryFeelingWhereInput
    some?: SecondaryFeelingWhereInput
    none?: SecondaryFeelingWhereInput
  }

  export type SecondaryFeelingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoreFeelingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type CoreFeelingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoreFeelingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type CoreFeelingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type CoreFeelingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CoreFeelingScalarRelationFilter = {
    is?: CoreFeelingWhereInput
    isNot?: CoreFeelingWhereInput
  }

  export type LeafFeelingListRelationFilter = {
    every?: LeafFeelingWhereInput
    some?: LeafFeelingWhereInput
    none?: LeafFeelingWhereInput
  }

  export type LeafFeelingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecondaryFeelingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coreFeelingId?: SortOrder
  }

  export type SecondaryFeelingAvgOrderByAggregateInput = {
    id?: SortOrder
    coreFeelingId?: SortOrder
  }

  export type SecondaryFeelingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coreFeelingId?: SortOrder
  }

  export type SecondaryFeelingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coreFeelingId?: SortOrder
  }

  export type SecondaryFeelingSumOrderByAggregateInput = {
    id?: SortOrder
    coreFeelingId?: SortOrder
  }

  export type SecondaryFeelingScalarRelationFilter = {
    is?: SecondaryFeelingWhereInput
    isNot?: SecondaryFeelingWhereInput
  }

  export type LeafFeelingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryFeelingId?: SortOrder
  }

  export type LeafFeelingAvgOrderByAggregateInput = {
    id?: SortOrder
    secondaryFeelingId?: SortOrder
  }

  export type LeafFeelingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryFeelingId?: SortOrder
  }

  export type LeafFeelingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryFeelingId?: SortOrder
  }

  export type LeafFeelingSumOrderByAggregateInput = {
    id?: SortOrder
    secondaryFeelingId?: SortOrder
  }

  export type SecondaryFeelingCreateNestedManyWithoutCoreFeelingInput = {
    create?: XOR<SecondaryFeelingCreateWithoutCoreFeelingInput, SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput> | SecondaryFeelingCreateWithoutCoreFeelingInput[] | SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput[]
    connectOrCreate?: SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput | SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput[]
    createMany?: SecondaryFeelingCreateManyCoreFeelingInputEnvelope
    connect?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
  }

  export type SecondaryFeelingUncheckedCreateNestedManyWithoutCoreFeelingInput = {
    create?: XOR<SecondaryFeelingCreateWithoutCoreFeelingInput, SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput> | SecondaryFeelingCreateWithoutCoreFeelingInput[] | SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput[]
    connectOrCreate?: SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput | SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput[]
    createMany?: SecondaryFeelingCreateManyCoreFeelingInputEnvelope
    connect?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SecondaryFeelingUpdateManyWithoutCoreFeelingNestedInput = {
    create?: XOR<SecondaryFeelingCreateWithoutCoreFeelingInput, SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput> | SecondaryFeelingCreateWithoutCoreFeelingInput[] | SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput[]
    connectOrCreate?: SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput | SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput[]
    upsert?: SecondaryFeelingUpsertWithWhereUniqueWithoutCoreFeelingInput | SecondaryFeelingUpsertWithWhereUniqueWithoutCoreFeelingInput[]
    createMany?: SecondaryFeelingCreateManyCoreFeelingInputEnvelope
    set?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    disconnect?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    delete?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    connect?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    update?: SecondaryFeelingUpdateWithWhereUniqueWithoutCoreFeelingInput | SecondaryFeelingUpdateWithWhereUniqueWithoutCoreFeelingInput[]
    updateMany?: SecondaryFeelingUpdateManyWithWhereWithoutCoreFeelingInput | SecondaryFeelingUpdateManyWithWhereWithoutCoreFeelingInput[]
    deleteMany?: SecondaryFeelingScalarWhereInput | SecondaryFeelingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SecondaryFeelingUncheckedUpdateManyWithoutCoreFeelingNestedInput = {
    create?: XOR<SecondaryFeelingCreateWithoutCoreFeelingInput, SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput> | SecondaryFeelingCreateWithoutCoreFeelingInput[] | SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput[]
    connectOrCreate?: SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput | SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput[]
    upsert?: SecondaryFeelingUpsertWithWhereUniqueWithoutCoreFeelingInput | SecondaryFeelingUpsertWithWhereUniqueWithoutCoreFeelingInput[]
    createMany?: SecondaryFeelingCreateManyCoreFeelingInputEnvelope
    set?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    disconnect?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    delete?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    connect?: SecondaryFeelingWhereUniqueInput | SecondaryFeelingWhereUniqueInput[]
    update?: SecondaryFeelingUpdateWithWhereUniqueWithoutCoreFeelingInput | SecondaryFeelingUpdateWithWhereUniqueWithoutCoreFeelingInput[]
    updateMany?: SecondaryFeelingUpdateManyWithWhereWithoutCoreFeelingInput | SecondaryFeelingUpdateManyWithWhereWithoutCoreFeelingInput[]
    deleteMany?: SecondaryFeelingScalarWhereInput | SecondaryFeelingScalarWhereInput[]
  }

  export type CoreFeelingCreateNestedOneWithoutSecondaryFeelingsInput = {
    create?: XOR<CoreFeelingCreateWithoutSecondaryFeelingsInput, CoreFeelingUncheckedCreateWithoutSecondaryFeelingsInput>
    connectOrCreate?: CoreFeelingCreateOrConnectWithoutSecondaryFeelingsInput
    connect?: CoreFeelingWhereUniqueInput
  }

  export type LeafFeelingCreateNestedManyWithoutSecondaryFeelingInput = {
    create?: XOR<LeafFeelingCreateWithoutSecondaryFeelingInput, LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput> | LeafFeelingCreateWithoutSecondaryFeelingInput[] | LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput[]
    connectOrCreate?: LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput | LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput[]
    createMany?: LeafFeelingCreateManySecondaryFeelingInputEnvelope
    connect?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
  }

  export type LeafFeelingUncheckedCreateNestedManyWithoutSecondaryFeelingInput = {
    create?: XOR<LeafFeelingCreateWithoutSecondaryFeelingInput, LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput> | LeafFeelingCreateWithoutSecondaryFeelingInput[] | LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput[]
    connectOrCreate?: LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput | LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput[]
    createMany?: LeafFeelingCreateManySecondaryFeelingInputEnvelope
    connect?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
  }

  export type CoreFeelingUpdateOneRequiredWithoutSecondaryFeelingsNestedInput = {
    create?: XOR<CoreFeelingCreateWithoutSecondaryFeelingsInput, CoreFeelingUncheckedCreateWithoutSecondaryFeelingsInput>
    connectOrCreate?: CoreFeelingCreateOrConnectWithoutSecondaryFeelingsInput
    upsert?: CoreFeelingUpsertWithoutSecondaryFeelingsInput
    connect?: CoreFeelingWhereUniqueInput
    update?: XOR<XOR<CoreFeelingUpdateToOneWithWhereWithoutSecondaryFeelingsInput, CoreFeelingUpdateWithoutSecondaryFeelingsInput>, CoreFeelingUncheckedUpdateWithoutSecondaryFeelingsInput>
  }

  export type LeafFeelingUpdateManyWithoutSecondaryFeelingNestedInput = {
    create?: XOR<LeafFeelingCreateWithoutSecondaryFeelingInput, LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput> | LeafFeelingCreateWithoutSecondaryFeelingInput[] | LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput[]
    connectOrCreate?: LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput | LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput[]
    upsert?: LeafFeelingUpsertWithWhereUniqueWithoutSecondaryFeelingInput | LeafFeelingUpsertWithWhereUniqueWithoutSecondaryFeelingInput[]
    createMany?: LeafFeelingCreateManySecondaryFeelingInputEnvelope
    set?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    disconnect?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    delete?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    connect?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    update?: LeafFeelingUpdateWithWhereUniqueWithoutSecondaryFeelingInput | LeafFeelingUpdateWithWhereUniqueWithoutSecondaryFeelingInput[]
    updateMany?: LeafFeelingUpdateManyWithWhereWithoutSecondaryFeelingInput | LeafFeelingUpdateManyWithWhereWithoutSecondaryFeelingInput[]
    deleteMany?: LeafFeelingScalarWhereInput | LeafFeelingScalarWhereInput[]
  }

  export type LeafFeelingUncheckedUpdateManyWithoutSecondaryFeelingNestedInput = {
    create?: XOR<LeafFeelingCreateWithoutSecondaryFeelingInput, LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput> | LeafFeelingCreateWithoutSecondaryFeelingInput[] | LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput[]
    connectOrCreate?: LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput | LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput[]
    upsert?: LeafFeelingUpsertWithWhereUniqueWithoutSecondaryFeelingInput | LeafFeelingUpsertWithWhereUniqueWithoutSecondaryFeelingInput[]
    createMany?: LeafFeelingCreateManySecondaryFeelingInputEnvelope
    set?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    disconnect?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    delete?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    connect?: LeafFeelingWhereUniqueInput | LeafFeelingWhereUniqueInput[]
    update?: LeafFeelingUpdateWithWhereUniqueWithoutSecondaryFeelingInput | LeafFeelingUpdateWithWhereUniqueWithoutSecondaryFeelingInput[]
    updateMany?: LeafFeelingUpdateManyWithWhereWithoutSecondaryFeelingInput | LeafFeelingUpdateManyWithWhereWithoutSecondaryFeelingInput[]
    deleteMany?: LeafFeelingScalarWhereInput | LeafFeelingScalarWhereInput[]
  }

  export type SecondaryFeelingCreateNestedOneWithoutLeafFeelingsInput = {
    create?: XOR<SecondaryFeelingCreateWithoutLeafFeelingsInput, SecondaryFeelingUncheckedCreateWithoutLeafFeelingsInput>
    connectOrCreate?: SecondaryFeelingCreateOrConnectWithoutLeafFeelingsInput
    connect?: SecondaryFeelingWhereUniqueInput
  }

  export type SecondaryFeelingUpdateOneRequiredWithoutLeafFeelingsNestedInput = {
    create?: XOR<SecondaryFeelingCreateWithoutLeafFeelingsInput, SecondaryFeelingUncheckedCreateWithoutLeafFeelingsInput>
    connectOrCreate?: SecondaryFeelingCreateOrConnectWithoutLeafFeelingsInput
    upsert?: SecondaryFeelingUpsertWithoutLeafFeelingsInput
    connect?: SecondaryFeelingWhereUniqueInput
    update?: XOR<XOR<SecondaryFeelingUpdateToOneWithWhereWithoutLeafFeelingsInput, SecondaryFeelingUpdateWithoutLeafFeelingsInput>, SecondaryFeelingUncheckedUpdateWithoutLeafFeelingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SecondaryFeelingCreateWithoutCoreFeelingInput = {
    name: string
    leafFeelings?: LeafFeelingCreateNestedManyWithoutSecondaryFeelingInput
  }

  export type SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput = {
    id?: number
    name: string
    leafFeelings?: LeafFeelingUncheckedCreateNestedManyWithoutSecondaryFeelingInput
  }

  export type SecondaryFeelingCreateOrConnectWithoutCoreFeelingInput = {
    where: SecondaryFeelingWhereUniqueInput
    create: XOR<SecondaryFeelingCreateWithoutCoreFeelingInput, SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput>
  }

  export type SecondaryFeelingCreateManyCoreFeelingInputEnvelope = {
    data: SecondaryFeelingCreateManyCoreFeelingInput | SecondaryFeelingCreateManyCoreFeelingInput[]
    skipDuplicates?: boolean
  }

  export type SecondaryFeelingUpsertWithWhereUniqueWithoutCoreFeelingInput = {
    where: SecondaryFeelingWhereUniqueInput
    update: XOR<SecondaryFeelingUpdateWithoutCoreFeelingInput, SecondaryFeelingUncheckedUpdateWithoutCoreFeelingInput>
    create: XOR<SecondaryFeelingCreateWithoutCoreFeelingInput, SecondaryFeelingUncheckedCreateWithoutCoreFeelingInput>
  }

  export type SecondaryFeelingUpdateWithWhereUniqueWithoutCoreFeelingInput = {
    where: SecondaryFeelingWhereUniqueInput
    data: XOR<SecondaryFeelingUpdateWithoutCoreFeelingInput, SecondaryFeelingUncheckedUpdateWithoutCoreFeelingInput>
  }

  export type SecondaryFeelingUpdateManyWithWhereWithoutCoreFeelingInput = {
    where: SecondaryFeelingScalarWhereInput
    data: XOR<SecondaryFeelingUpdateManyMutationInput, SecondaryFeelingUncheckedUpdateManyWithoutCoreFeelingInput>
  }

  export type SecondaryFeelingScalarWhereInput = {
    AND?: SecondaryFeelingScalarWhereInput | SecondaryFeelingScalarWhereInput[]
    OR?: SecondaryFeelingScalarWhereInput[]
    NOT?: SecondaryFeelingScalarWhereInput | SecondaryFeelingScalarWhereInput[]
    id?: IntFilter<"SecondaryFeeling"> | number
    name?: StringFilter<"SecondaryFeeling"> | string
    coreFeelingId?: IntFilter<"SecondaryFeeling"> | number
  }

  export type CoreFeelingCreateWithoutSecondaryFeelingsInput = {
    name: string
    category: string
  }

  export type CoreFeelingUncheckedCreateWithoutSecondaryFeelingsInput = {
    id?: number
    name: string
    category: string
  }

  export type CoreFeelingCreateOrConnectWithoutSecondaryFeelingsInput = {
    where: CoreFeelingWhereUniqueInput
    create: XOR<CoreFeelingCreateWithoutSecondaryFeelingsInput, CoreFeelingUncheckedCreateWithoutSecondaryFeelingsInput>
  }

  export type LeafFeelingCreateWithoutSecondaryFeelingInput = {
    name: string
  }

  export type LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput = {
    id?: number
    name: string
  }

  export type LeafFeelingCreateOrConnectWithoutSecondaryFeelingInput = {
    where: LeafFeelingWhereUniqueInput
    create: XOR<LeafFeelingCreateWithoutSecondaryFeelingInput, LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput>
  }

  export type LeafFeelingCreateManySecondaryFeelingInputEnvelope = {
    data: LeafFeelingCreateManySecondaryFeelingInput | LeafFeelingCreateManySecondaryFeelingInput[]
    skipDuplicates?: boolean
  }

  export type CoreFeelingUpsertWithoutSecondaryFeelingsInput = {
    update: XOR<CoreFeelingUpdateWithoutSecondaryFeelingsInput, CoreFeelingUncheckedUpdateWithoutSecondaryFeelingsInput>
    create: XOR<CoreFeelingCreateWithoutSecondaryFeelingsInput, CoreFeelingUncheckedCreateWithoutSecondaryFeelingsInput>
    where?: CoreFeelingWhereInput
  }

  export type CoreFeelingUpdateToOneWithWhereWithoutSecondaryFeelingsInput = {
    where?: CoreFeelingWhereInput
    data: XOR<CoreFeelingUpdateWithoutSecondaryFeelingsInput, CoreFeelingUncheckedUpdateWithoutSecondaryFeelingsInput>
  }

  export type CoreFeelingUpdateWithoutSecondaryFeelingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CoreFeelingUncheckedUpdateWithoutSecondaryFeelingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type LeafFeelingUpsertWithWhereUniqueWithoutSecondaryFeelingInput = {
    where: LeafFeelingWhereUniqueInput
    update: XOR<LeafFeelingUpdateWithoutSecondaryFeelingInput, LeafFeelingUncheckedUpdateWithoutSecondaryFeelingInput>
    create: XOR<LeafFeelingCreateWithoutSecondaryFeelingInput, LeafFeelingUncheckedCreateWithoutSecondaryFeelingInput>
  }

  export type LeafFeelingUpdateWithWhereUniqueWithoutSecondaryFeelingInput = {
    where: LeafFeelingWhereUniqueInput
    data: XOR<LeafFeelingUpdateWithoutSecondaryFeelingInput, LeafFeelingUncheckedUpdateWithoutSecondaryFeelingInput>
  }

  export type LeafFeelingUpdateManyWithWhereWithoutSecondaryFeelingInput = {
    where: LeafFeelingScalarWhereInput
    data: XOR<LeafFeelingUpdateManyMutationInput, LeafFeelingUncheckedUpdateManyWithoutSecondaryFeelingInput>
  }

  export type LeafFeelingScalarWhereInput = {
    AND?: LeafFeelingScalarWhereInput | LeafFeelingScalarWhereInput[]
    OR?: LeafFeelingScalarWhereInput[]
    NOT?: LeafFeelingScalarWhereInput | LeafFeelingScalarWhereInput[]
    id?: IntFilter<"LeafFeeling"> | number
    name?: StringFilter<"LeafFeeling"> | string
    secondaryFeelingId?: IntFilter<"LeafFeeling"> | number
  }

  export type SecondaryFeelingCreateWithoutLeafFeelingsInput = {
    name: string
    coreFeeling: CoreFeelingCreateNestedOneWithoutSecondaryFeelingsInput
  }

  export type SecondaryFeelingUncheckedCreateWithoutLeafFeelingsInput = {
    id?: number
    name: string
    coreFeelingId: number
  }

  export type SecondaryFeelingCreateOrConnectWithoutLeafFeelingsInput = {
    where: SecondaryFeelingWhereUniqueInput
    create: XOR<SecondaryFeelingCreateWithoutLeafFeelingsInput, SecondaryFeelingUncheckedCreateWithoutLeafFeelingsInput>
  }

  export type SecondaryFeelingUpsertWithoutLeafFeelingsInput = {
    update: XOR<SecondaryFeelingUpdateWithoutLeafFeelingsInput, SecondaryFeelingUncheckedUpdateWithoutLeafFeelingsInput>
    create: XOR<SecondaryFeelingCreateWithoutLeafFeelingsInput, SecondaryFeelingUncheckedCreateWithoutLeafFeelingsInput>
    where?: SecondaryFeelingWhereInput
  }

  export type SecondaryFeelingUpdateToOneWithWhereWithoutLeafFeelingsInput = {
    where?: SecondaryFeelingWhereInput
    data: XOR<SecondaryFeelingUpdateWithoutLeafFeelingsInput, SecondaryFeelingUncheckedUpdateWithoutLeafFeelingsInput>
  }

  export type SecondaryFeelingUpdateWithoutLeafFeelingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    coreFeeling?: CoreFeelingUpdateOneRequiredWithoutSecondaryFeelingsNestedInput
  }

  export type SecondaryFeelingUncheckedUpdateWithoutLeafFeelingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coreFeelingId?: IntFieldUpdateOperationsInput | number
  }

  export type SecondaryFeelingCreateManyCoreFeelingInput = {
    id?: number
    name: string
  }

  export type SecondaryFeelingUpdateWithoutCoreFeelingInput = {
    name?: StringFieldUpdateOperationsInput | string
    leafFeelings?: LeafFeelingUpdateManyWithoutSecondaryFeelingNestedInput
  }

  export type SecondaryFeelingUncheckedUpdateWithoutCoreFeelingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    leafFeelings?: LeafFeelingUncheckedUpdateManyWithoutSecondaryFeelingNestedInput
  }

  export type SecondaryFeelingUncheckedUpdateManyWithoutCoreFeelingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeafFeelingCreateManySecondaryFeelingInput = {
    id?: number
    name: string
  }

  export type LeafFeelingUpdateWithoutSecondaryFeelingInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeafFeelingUncheckedUpdateWithoutSecondaryFeelingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeafFeelingUncheckedUpdateManyWithoutSecondaryFeelingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}