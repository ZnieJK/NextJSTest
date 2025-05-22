
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
 * Model Test1DataModel
 * 
 */
export type Test1DataModel = $Result.DefaultSelection<Prisma.$Test1DataModelPayload>
/**
 * Model Test1DataType
 * 
 */
export type Test1DataType = $Result.DefaultSelection<Prisma.$Test1DataTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Test1DataModels
 * const test1DataModels = await prisma.test1DataModel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Test1DataModels
   * const test1DataModels = await prisma.test1DataModel.findMany()
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
   * `prisma.test1DataModel`: Exposes CRUD operations for the **Test1DataModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test1DataModels
    * const test1DataModels = await prisma.test1DataModel.findMany()
    * ```
    */
  get test1DataModel(): Prisma.Test1DataModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test1DataType`: Exposes CRUD operations for the **Test1DataType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test1DataTypes
    * const test1DataTypes = await prisma.test1DataType.findMany()
    * ```
    */
  get test1DataType(): Prisma.Test1DataTypeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Test1DataModel: 'Test1DataModel',
    Test1DataType: 'Test1DataType'
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
      modelProps: "test1DataModel" | "test1DataType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Test1DataModel: {
        payload: Prisma.$Test1DataModelPayload<ExtArgs>
        fields: Prisma.Test1DataModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Test1DataModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Test1DataModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>
          }
          findFirst: {
            args: Prisma.Test1DataModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Test1DataModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>
          }
          findMany: {
            args: Prisma.Test1DataModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>[]
          }
          create: {
            args: Prisma.Test1DataModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>
          }
          createMany: {
            args: Prisma.Test1DataModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Test1DataModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>[]
          }
          delete: {
            args: Prisma.Test1DataModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>
          }
          update: {
            args: Prisma.Test1DataModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>
          }
          deleteMany: {
            args: Prisma.Test1DataModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Test1DataModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Test1DataModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>[]
          }
          upsert: {
            args: Prisma.Test1DataModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataModelPayload>
          }
          aggregate: {
            args: Prisma.Test1DataModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest1DataModel>
          }
          groupBy: {
            args: Prisma.Test1DataModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<Test1DataModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.Test1DataModelCountArgs<ExtArgs>
            result: $Utils.Optional<Test1DataModelCountAggregateOutputType> | number
          }
        }
      }
      Test1DataType: {
        payload: Prisma.$Test1DataTypePayload<ExtArgs>
        fields: Prisma.Test1DataTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Test1DataTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Test1DataTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>
          }
          findFirst: {
            args: Prisma.Test1DataTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Test1DataTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>
          }
          findMany: {
            args: Prisma.Test1DataTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>[]
          }
          create: {
            args: Prisma.Test1DataTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>
          }
          createMany: {
            args: Prisma.Test1DataTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Test1DataTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>[]
          }
          delete: {
            args: Prisma.Test1DataTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>
          }
          update: {
            args: Prisma.Test1DataTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>
          }
          deleteMany: {
            args: Prisma.Test1DataTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Test1DataTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Test1DataTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>[]
          }
          upsert: {
            args: Prisma.Test1DataTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test1DataTypePayload>
          }
          aggregate: {
            args: Prisma.Test1DataTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest1DataType>
          }
          groupBy: {
            args: Prisma.Test1DataTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Test1DataTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Test1DataTypeCountArgs<ExtArgs>
            result: $Utils.Optional<Test1DataTypeCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    test1DataModel?: Test1DataModelOmit
    test1DataType?: Test1DataTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Models
   */

  /**
   * Model Test1DataModel
   */

  export type AggregateTest1DataModel = {
    _count: Test1DataModelCountAggregateOutputType | null
    _avg: Test1DataModelAvgAggregateOutputType | null
    _sum: Test1DataModelSumAggregateOutputType | null
    _min: Test1DataModelMinAggregateOutputType | null
    _max: Test1DataModelMaxAggregateOutputType | null
  }

  export type Test1DataModelAvgAggregateOutputType = {
    id: number | null
  }

  export type Test1DataModelSumAggregateOutputType = {
    id: number | null
  }

  export type Test1DataModelMinAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
  }

  export type Test1DataModelMaxAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
  }

  export type Test1DataModelCountAggregateOutputType = {
    id: number
    type: number
    name: number
    _all: number
  }


  export type Test1DataModelAvgAggregateInputType = {
    id?: true
  }

  export type Test1DataModelSumAggregateInputType = {
    id?: true
  }

  export type Test1DataModelMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
  }

  export type Test1DataModelMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
  }

  export type Test1DataModelCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    _all?: true
  }

  export type Test1DataModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test1DataModel to aggregate.
     */
    where?: Test1DataModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataModels to fetch.
     */
    orderBy?: Test1DataModelOrderByWithRelationInput | Test1DataModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Test1DataModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Test1DataModels
    **/
    _count?: true | Test1DataModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test1DataModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test1DataModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test1DataModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test1DataModelMaxAggregateInputType
  }

  export type GetTest1DataModelAggregateType<T extends Test1DataModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTest1DataModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest1DataModel[P]>
      : GetScalarType<T[P], AggregateTest1DataModel[P]>
  }




  export type Test1DataModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test1DataModelWhereInput
    orderBy?: Test1DataModelOrderByWithAggregationInput | Test1DataModelOrderByWithAggregationInput[]
    by: Test1DataModelScalarFieldEnum[] | Test1DataModelScalarFieldEnum
    having?: Test1DataModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test1DataModelCountAggregateInputType | true
    _avg?: Test1DataModelAvgAggregateInputType
    _sum?: Test1DataModelSumAggregateInputType
    _min?: Test1DataModelMinAggregateInputType
    _max?: Test1DataModelMaxAggregateInputType
  }

  export type Test1DataModelGroupByOutputType = {
    id: number
    type: string
    name: string
    _count: Test1DataModelCountAggregateOutputType | null
    _avg: Test1DataModelAvgAggregateOutputType | null
    _sum: Test1DataModelSumAggregateOutputType | null
    _min: Test1DataModelMinAggregateOutputType | null
    _max: Test1DataModelMaxAggregateOutputType | null
  }

  type GetTest1DataModelGroupByPayload<T extends Test1DataModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test1DataModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test1DataModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test1DataModelGroupByOutputType[P]>
            : GetScalarType<T[P], Test1DataModelGroupByOutputType[P]>
        }
      >
    >


  export type Test1DataModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
  }, ExtArgs["result"]["test1DataModel"]>

  export type Test1DataModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
  }, ExtArgs["result"]["test1DataModel"]>

  export type Test1DataModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
  }, ExtArgs["result"]["test1DataModel"]>

  export type Test1DataModelSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
  }

  export type Test1DataModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name", ExtArgs["result"]["test1DataModel"]>

  export type $Test1DataModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test1DataModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      name: string
    }, ExtArgs["result"]["test1DataModel"]>
    composites: {}
  }

  type Test1DataModelGetPayload<S extends boolean | null | undefined | Test1DataModelDefaultArgs> = $Result.GetResult<Prisma.$Test1DataModelPayload, S>

  type Test1DataModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Test1DataModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test1DataModelCountAggregateInputType | true
    }

  export interface Test1DataModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test1DataModel'], meta: { name: 'Test1DataModel' } }
    /**
     * Find zero or one Test1DataModel that matches the filter.
     * @param {Test1DataModelFindUniqueArgs} args - Arguments to find a Test1DataModel
     * @example
     * // Get one Test1DataModel
     * const test1DataModel = await prisma.test1DataModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Test1DataModelFindUniqueArgs>(args: SelectSubset<T, Test1DataModelFindUniqueArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test1DataModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Test1DataModelFindUniqueOrThrowArgs} args - Arguments to find a Test1DataModel
     * @example
     * // Get one Test1DataModel
     * const test1DataModel = await prisma.test1DataModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Test1DataModelFindUniqueOrThrowArgs>(args: SelectSubset<T, Test1DataModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test1DataModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelFindFirstArgs} args - Arguments to find a Test1DataModel
     * @example
     * // Get one Test1DataModel
     * const test1DataModel = await prisma.test1DataModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Test1DataModelFindFirstArgs>(args?: SelectSubset<T, Test1DataModelFindFirstArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test1DataModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelFindFirstOrThrowArgs} args - Arguments to find a Test1DataModel
     * @example
     * // Get one Test1DataModel
     * const test1DataModel = await prisma.test1DataModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Test1DataModelFindFirstOrThrowArgs>(args?: SelectSubset<T, Test1DataModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test1DataModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test1DataModels
     * const test1DataModels = await prisma.test1DataModel.findMany()
     * 
     * // Get first 10 Test1DataModels
     * const test1DataModels = await prisma.test1DataModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test1DataModelWithIdOnly = await prisma.test1DataModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Test1DataModelFindManyArgs>(args?: SelectSubset<T, Test1DataModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test1DataModel.
     * @param {Test1DataModelCreateArgs} args - Arguments to create a Test1DataModel.
     * @example
     * // Create one Test1DataModel
     * const Test1DataModel = await prisma.test1DataModel.create({
     *   data: {
     *     // ... data to create a Test1DataModel
     *   }
     * })
     * 
     */
    create<T extends Test1DataModelCreateArgs>(args: SelectSubset<T, Test1DataModelCreateArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test1DataModels.
     * @param {Test1DataModelCreateManyArgs} args - Arguments to create many Test1DataModels.
     * @example
     * // Create many Test1DataModels
     * const test1DataModel = await prisma.test1DataModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Test1DataModelCreateManyArgs>(args?: SelectSubset<T, Test1DataModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test1DataModels and returns the data saved in the database.
     * @param {Test1DataModelCreateManyAndReturnArgs} args - Arguments to create many Test1DataModels.
     * @example
     * // Create many Test1DataModels
     * const test1DataModel = await prisma.test1DataModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test1DataModels and only return the `id`
     * const test1DataModelWithIdOnly = await prisma.test1DataModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Test1DataModelCreateManyAndReturnArgs>(args?: SelectSubset<T, Test1DataModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test1DataModel.
     * @param {Test1DataModelDeleteArgs} args - Arguments to delete one Test1DataModel.
     * @example
     * // Delete one Test1DataModel
     * const Test1DataModel = await prisma.test1DataModel.delete({
     *   where: {
     *     // ... filter to delete one Test1DataModel
     *   }
     * })
     * 
     */
    delete<T extends Test1DataModelDeleteArgs>(args: SelectSubset<T, Test1DataModelDeleteArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test1DataModel.
     * @param {Test1DataModelUpdateArgs} args - Arguments to update one Test1DataModel.
     * @example
     * // Update one Test1DataModel
     * const test1DataModel = await prisma.test1DataModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Test1DataModelUpdateArgs>(args: SelectSubset<T, Test1DataModelUpdateArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test1DataModels.
     * @param {Test1DataModelDeleteManyArgs} args - Arguments to filter Test1DataModels to delete.
     * @example
     * // Delete a few Test1DataModels
     * const { count } = await prisma.test1DataModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Test1DataModelDeleteManyArgs>(args?: SelectSubset<T, Test1DataModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test1DataModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test1DataModels
     * const test1DataModel = await prisma.test1DataModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Test1DataModelUpdateManyArgs>(args: SelectSubset<T, Test1DataModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test1DataModels and returns the data updated in the database.
     * @param {Test1DataModelUpdateManyAndReturnArgs} args - Arguments to update many Test1DataModels.
     * @example
     * // Update many Test1DataModels
     * const test1DataModel = await prisma.test1DataModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Test1DataModels and only return the `id`
     * const test1DataModelWithIdOnly = await prisma.test1DataModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends Test1DataModelUpdateManyAndReturnArgs>(args: SelectSubset<T, Test1DataModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test1DataModel.
     * @param {Test1DataModelUpsertArgs} args - Arguments to update or create a Test1DataModel.
     * @example
     * // Update or create a Test1DataModel
     * const test1DataModel = await prisma.test1DataModel.upsert({
     *   create: {
     *     // ... data to create a Test1DataModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test1DataModel we want to update
     *   }
     * })
     */
    upsert<T extends Test1DataModelUpsertArgs>(args: SelectSubset<T, Test1DataModelUpsertArgs<ExtArgs>>): Prisma__Test1DataModelClient<$Result.GetResult<Prisma.$Test1DataModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test1DataModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelCountArgs} args - Arguments to filter Test1DataModels to count.
     * @example
     * // Count the number of Test1DataModels
     * const count = await prisma.test1DataModel.count({
     *   where: {
     *     // ... the filter for the Test1DataModels we want to count
     *   }
     * })
    **/
    count<T extends Test1DataModelCountArgs>(
      args?: Subset<T, Test1DataModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test1DataModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test1DataModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test1DataModelAggregateArgs>(args: Subset<T, Test1DataModelAggregateArgs>): Prisma.PrismaPromise<GetTest1DataModelAggregateType<T>>

    /**
     * Group by Test1DataModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataModelGroupByArgs} args - Group by arguments.
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
      T extends Test1DataModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test1DataModelGroupByArgs['orderBy'] }
        : { orderBy?: Test1DataModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Test1DataModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest1DataModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test1DataModel model
   */
  readonly fields: Test1DataModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test1DataModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Test1DataModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Test1DataModel model
   */
  interface Test1DataModelFieldRefs {
    readonly id: FieldRef<"Test1DataModel", 'Int'>
    readonly type: FieldRef<"Test1DataModel", 'String'>
    readonly name: FieldRef<"Test1DataModel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test1DataModel findUnique
   */
  export type Test1DataModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataModel to fetch.
     */
    where: Test1DataModelWhereUniqueInput
  }

  /**
   * Test1DataModel findUniqueOrThrow
   */
  export type Test1DataModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataModel to fetch.
     */
    where: Test1DataModelWhereUniqueInput
  }

  /**
   * Test1DataModel findFirst
   */
  export type Test1DataModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataModel to fetch.
     */
    where?: Test1DataModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataModels to fetch.
     */
    orderBy?: Test1DataModelOrderByWithRelationInput | Test1DataModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test1DataModels.
     */
    cursor?: Test1DataModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test1DataModels.
     */
    distinct?: Test1DataModelScalarFieldEnum | Test1DataModelScalarFieldEnum[]
  }

  /**
   * Test1DataModel findFirstOrThrow
   */
  export type Test1DataModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataModel to fetch.
     */
    where?: Test1DataModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataModels to fetch.
     */
    orderBy?: Test1DataModelOrderByWithRelationInput | Test1DataModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test1DataModels.
     */
    cursor?: Test1DataModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test1DataModels.
     */
    distinct?: Test1DataModelScalarFieldEnum | Test1DataModelScalarFieldEnum[]
  }

  /**
   * Test1DataModel findMany
   */
  export type Test1DataModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataModels to fetch.
     */
    where?: Test1DataModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataModels to fetch.
     */
    orderBy?: Test1DataModelOrderByWithRelationInput | Test1DataModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Test1DataModels.
     */
    cursor?: Test1DataModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataModels.
     */
    skip?: number
    distinct?: Test1DataModelScalarFieldEnum | Test1DataModelScalarFieldEnum[]
  }

  /**
   * Test1DataModel create
   */
  export type Test1DataModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * The data needed to create a Test1DataModel.
     */
    data: XOR<Test1DataModelCreateInput, Test1DataModelUncheckedCreateInput>
  }

  /**
   * Test1DataModel createMany
   */
  export type Test1DataModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Test1DataModels.
     */
    data: Test1DataModelCreateManyInput | Test1DataModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test1DataModel createManyAndReturn
   */
  export type Test1DataModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * The data used to create many Test1DataModels.
     */
    data: Test1DataModelCreateManyInput | Test1DataModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test1DataModel update
   */
  export type Test1DataModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * The data needed to update a Test1DataModel.
     */
    data: XOR<Test1DataModelUpdateInput, Test1DataModelUncheckedUpdateInput>
    /**
     * Choose, which Test1DataModel to update.
     */
    where: Test1DataModelWhereUniqueInput
  }

  /**
   * Test1DataModel updateMany
   */
  export type Test1DataModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Test1DataModels.
     */
    data: XOR<Test1DataModelUpdateManyMutationInput, Test1DataModelUncheckedUpdateManyInput>
    /**
     * Filter which Test1DataModels to update
     */
    where?: Test1DataModelWhereInput
    /**
     * Limit how many Test1DataModels to update.
     */
    limit?: number
  }

  /**
   * Test1DataModel updateManyAndReturn
   */
  export type Test1DataModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * The data used to update Test1DataModels.
     */
    data: XOR<Test1DataModelUpdateManyMutationInput, Test1DataModelUncheckedUpdateManyInput>
    /**
     * Filter which Test1DataModels to update
     */
    where?: Test1DataModelWhereInput
    /**
     * Limit how many Test1DataModels to update.
     */
    limit?: number
  }

  /**
   * Test1DataModel upsert
   */
  export type Test1DataModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * The filter to search for the Test1DataModel to update in case it exists.
     */
    where: Test1DataModelWhereUniqueInput
    /**
     * In case the Test1DataModel found by the `where` argument doesn't exist, create a new Test1DataModel with this data.
     */
    create: XOR<Test1DataModelCreateInput, Test1DataModelUncheckedCreateInput>
    /**
     * In case the Test1DataModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Test1DataModelUpdateInput, Test1DataModelUncheckedUpdateInput>
  }

  /**
   * Test1DataModel delete
   */
  export type Test1DataModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
    /**
     * Filter which Test1DataModel to delete.
     */
    where: Test1DataModelWhereUniqueInput
  }

  /**
   * Test1DataModel deleteMany
   */
  export type Test1DataModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test1DataModels to delete
     */
    where?: Test1DataModelWhereInput
    /**
     * Limit how many Test1DataModels to delete.
     */
    limit?: number
  }

  /**
   * Test1DataModel without action
   */
  export type Test1DataModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataModel
     */
    select?: Test1DataModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataModel
     */
    omit?: Test1DataModelOmit<ExtArgs> | null
  }


  /**
   * Model Test1DataType
   */

  export type AggregateTest1DataType = {
    _count: Test1DataTypeCountAggregateOutputType | null
    _avg: Test1DataTypeAvgAggregateOutputType | null
    _sum: Test1DataTypeSumAggregateOutputType | null
    _min: Test1DataTypeMinAggregateOutputType | null
    _max: Test1DataTypeMaxAggregateOutputType | null
  }

  export type Test1DataTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type Test1DataTypeSumAggregateOutputType = {
    id: number | null
  }

  export type Test1DataTypeMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type Test1DataTypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type Test1DataTypeCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type Test1DataTypeAvgAggregateInputType = {
    id?: true
  }

  export type Test1DataTypeSumAggregateInputType = {
    id?: true
  }

  export type Test1DataTypeMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type Test1DataTypeMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type Test1DataTypeCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type Test1DataTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test1DataType to aggregate.
     */
    where?: Test1DataTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataTypes to fetch.
     */
    orderBy?: Test1DataTypeOrderByWithRelationInput | Test1DataTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Test1DataTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Test1DataTypes
    **/
    _count?: true | Test1DataTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test1DataTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test1DataTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test1DataTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test1DataTypeMaxAggregateInputType
  }

  export type GetTest1DataTypeAggregateType<T extends Test1DataTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTest1DataType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest1DataType[P]>
      : GetScalarType<T[P], AggregateTest1DataType[P]>
  }




  export type Test1DataTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test1DataTypeWhereInput
    orderBy?: Test1DataTypeOrderByWithAggregationInput | Test1DataTypeOrderByWithAggregationInput[]
    by: Test1DataTypeScalarFieldEnum[] | Test1DataTypeScalarFieldEnum
    having?: Test1DataTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test1DataTypeCountAggregateInputType | true
    _avg?: Test1DataTypeAvgAggregateInputType
    _sum?: Test1DataTypeSumAggregateInputType
    _min?: Test1DataTypeMinAggregateInputType
    _max?: Test1DataTypeMaxAggregateInputType
  }

  export type Test1DataTypeGroupByOutputType = {
    id: number
    type: string
    _count: Test1DataTypeCountAggregateOutputType | null
    _avg: Test1DataTypeAvgAggregateOutputType | null
    _sum: Test1DataTypeSumAggregateOutputType | null
    _min: Test1DataTypeMinAggregateOutputType | null
    _max: Test1DataTypeMaxAggregateOutputType | null
  }

  type GetTest1DataTypeGroupByPayload<T extends Test1DataTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test1DataTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test1DataTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test1DataTypeGroupByOutputType[P]>
            : GetScalarType<T[P], Test1DataTypeGroupByOutputType[P]>
        }
      >
    >


  export type Test1DataTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["test1DataType"]>

  export type Test1DataTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["test1DataType"]>

  export type Test1DataTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["test1DataType"]>

  export type Test1DataTypeSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type Test1DataTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["test1DataType"]>

  export type $Test1DataTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test1DataType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
    }, ExtArgs["result"]["test1DataType"]>
    composites: {}
  }

  type Test1DataTypeGetPayload<S extends boolean | null | undefined | Test1DataTypeDefaultArgs> = $Result.GetResult<Prisma.$Test1DataTypePayload, S>

  type Test1DataTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Test1DataTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test1DataTypeCountAggregateInputType | true
    }

  export interface Test1DataTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test1DataType'], meta: { name: 'Test1DataType' } }
    /**
     * Find zero or one Test1DataType that matches the filter.
     * @param {Test1DataTypeFindUniqueArgs} args - Arguments to find a Test1DataType
     * @example
     * // Get one Test1DataType
     * const test1DataType = await prisma.test1DataType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Test1DataTypeFindUniqueArgs>(args: SelectSubset<T, Test1DataTypeFindUniqueArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test1DataType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Test1DataTypeFindUniqueOrThrowArgs} args - Arguments to find a Test1DataType
     * @example
     * // Get one Test1DataType
     * const test1DataType = await prisma.test1DataType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Test1DataTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, Test1DataTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test1DataType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeFindFirstArgs} args - Arguments to find a Test1DataType
     * @example
     * // Get one Test1DataType
     * const test1DataType = await prisma.test1DataType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Test1DataTypeFindFirstArgs>(args?: SelectSubset<T, Test1DataTypeFindFirstArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test1DataType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeFindFirstOrThrowArgs} args - Arguments to find a Test1DataType
     * @example
     * // Get one Test1DataType
     * const test1DataType = await prisma.test1DataType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Test1DataTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, Test1DataTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test1DataTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test1DataTypes
     * const test1DataTypes = await prisma.test1DataType.findMany()
     * 
     * // Get first 10 Test1DataTypes
     * const test1DataTypes = await prisma.test1DataType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test1DataTypeWithIdOnly = await prisma.test1DataType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Test1DataTypeFindManyArgs>(args?: SelectSubset<T, Test1DataTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test1DataType.
     * @param {Test1DataTypeCreateArgs} args - Arguments to create a Test1DataType.
     * @example
     * // Create one Test1DataType
     * const Test1DataType = await prisma.test1DataType.create({
     *   data: {
     *     // ... data to create a Test1DataType
     *   }
     * })
     * 
     */
    create<T extends Test1DataTypeCreateArgs>(args: SelectSubset<T, Test1DataTypeCreateArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test1DataTypes.
     * @param {Test1DataTypeCreateManyArgs} args - Arguments to create many Test1DataTypes.
     * @example
     * // Create many Test1DataTypes
     * const test1DataType = await prisma.test1DataType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Test1DataTypeCreateManyArgs>(args?: SelectSubset<T, Test1DataTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test1DataTypes and returns the data saved in the database.
     * @param {Test1DataTypeCreateManyAndReturnArgs} args - Arguments to create many Test1DataTypes.
     * @example
     * // Create many Test1DataTypes
     * const test1DataType = await prisma.test1DataType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test1DataTypes and only return the `id`
     * const test1DataTypeWithIdOnly = await prisma.test1DataType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Test1DataTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, Test1DataTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test1DataType.
     * @param {Test1DataTypeDeleteArgs} args - Arguments to delete one Test1DataType.
     * @example
     * // Delete one Test1DataType
     * const Test1DataType = await prisma.test1DataType.delete({
     *   where: {
     *     // ... filter to delete one Test1DataType
     *   }
     * })
     * 
     */
    delete<T extends Test1DataTypeDeleteArgs>(args: SelectSubset<T, Test1DataTypeDeleteArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test1DataType.
     * @param {Test1DataTypeUpdateArgs} args - Arguments to update one Test1DataType.
     * @example
     * // Update one Test1DataType
     * const test1DataType = await prisma.test1DataType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Test1DataTypeUpdateArgs>(args: SelectSubset<T, Test1DataTypeUpdateArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test1DataTypes.
     * @param {Test1DataTypeDeleteManyArgs} args - Arguments to filter Test1DataTypes to delete.
     * @example
     * // Delete a few Test1DataTypes
     * const { count } = await prisma.test1DataType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Test1DataTypeDeleteManyArgs>(args?: SelectSubset<T, Test1DataTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test1DataTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test1DataTypes
     * const test1DataType = await prisma.test1DataType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Test1DataTypeUpdateManyArgs>(args: SelectSubset<T, Test1DataTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test1DataTypes and returns the data updated in the database.
     * @param {Test1DataTypeUpdateManyAndReturnArgs} args - Arguments to update many Test1DataTypes.
     * @example
     * // Update many Test1DataTypes
     * const test1DataType = await prisma.test1DataType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Test1DataTypes and only return the `id`
     * const test1DataTypeWithIdOnly = await prisma.test1DataType.updateManyAndReturn({
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
    updateManyAndReturn<T extends Test1DataTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, Test1DataTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test1DataType.
     * @param {Test1DataTypeUpsertArgs} args - Arguments to update or create a Test1DataType.
     * @example
     * // Update or create a Test1DataType
     * const test1DataType = await prisma.test1DataType.upsert({
     *   create: {
     *     // ... data to create a Test1DataType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test1DataType we want to update
     *   }
     * })
     */
    upsert<T extends Test1DataTypeUpsertArgs>(args: SelectSubset<T, Test1DataTypeUpsertArgs<ExtArgs>>): Prisma__Test1DataTypeClient<$Result.GetResult<Prisma.$Test1DataTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test1DataTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeCountArgs} args - Arguments to filter Test1DataTypes to count.
     * @example
     * // Count the number of Test1DataTypes
     * const count = await prisma.test1DataType.count({
     *   where: {
     *     // ... the filter for the Test1DataTypes we want to count
     *   }
     * })
    **/
    count<T extends Test1DataTypeCountArgs>(
      args?: Subset<T, Test1DataTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test1DataTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test1DataType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test1DataTypeAggregateArgs>(args: Subset<T, Test1DataTypeAggregateArgs>): Prisma.PrismaPromise<GetTest1DataTypeAggregateType<T>>

    /**
     * Group by Test1DataType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test1DataTypeGroupByArgs} args - Group by arguments.
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
      T extends Test1DataTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test1DataTypeGroupByArgs['orderBy'] }
        : { orderBy?: Test1DataTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Test1DataTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest1DataTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test1DataType model
   */
  readonly fields: Test1DataTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test1DataType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Test1DataTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Test1DataType model
   */
  interface Test1DataTypeFieldRefs {
    readonly id: FieldRef<"Test1DataType", 'Int'>
    readonly type: FieldRef<"Test1DataType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test1DataType findUnique
   */
  export type Test1DataTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataType to fetch.
     */
    where: Test1DataTypeWhereUniqueInput
  }

  /**
   * Test1DataType findUniqueOrThrow
   */
  export type Test1DataTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataType to fetch.
     */
    where: Test1DataTypeWhereUniqueInput
  }

  /**
   * Test1DataType findFirst
   */
  export type Test1DataTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataType to fetch.
     */
    where?: Test1DataTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataTypes to fetch.
     */
    orderBy?: Test1DataTypeOrderByWithRelationInput | Test1DataTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test1DataTypes.
     */
    cursor?: Test1DataTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test1DataTypes.
     */
    distinct?: Test1DataTypeScalarFieldEnum | Test1DataTypeScalarFieldEnum[]
  }

  /**
   * Test1DataType findFirstOrThrow
   */
  export type Test1DataTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataType to fetch.
     */
    where?: Test1DataTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataTypes to fetch.
     */
    orderBy?: Test1DataTypeOrderByWithRelationInput | Test1DataTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test1DataTypes.
     */
    cursor?: Test1DataTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test1DataTypes.
     */
    distinct?: Test1DataTypeScalarFieldEnum | Test1DataTypeScalarFieldEnum[]
  }

  /**
   * Test1DataType findMany
   */
  export type Test1DataTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * Filter, which Test1DataTypes to fetch.
     */
    where?: Test1DataTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test1DataTypes to fetch.
     */
    orderBy?: Test1DataTypeOrderByWithRelationInput | Test1DataTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Test1DataTypes.
     */
    cursor?: Test1DataTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test1DataTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test1DataTypes.
     */
    skip?: number
    distinct?: Test1DataTypeScalarFieldEnum | Test1DataTypeScalarFieldEnum[]
  }

  /**
   * Test1DataType create
   */
  export type Test1DataTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a Test1DataType.
     */
    data: XOR<Test1DataTypeCreateInput, Test1DataTypeUncheckedCreateInput>
  }

  /**
   * Test1DataType createMany
   */
  export type Test1DataTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Test1DataTypes.
     */
    data: Test1DataTypeCreateManyInput | Test1DataTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test1DataType createManyAndReturn
   */
  export type Test1DataTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * The data used to create many Test1DataTypes.
     */
    data: Test1DataTypeCreateManyInput | Test1DataTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test1DataType update
   */
  export type Test1DataTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a Test1DataType.
     */
    data: XOR<Test1DataTypeUpdateInput, Test1DataTypeUncheckedUpdateInput>
    /**
     * Choose, which Test1DataType to update.
     */
    where: Test1DataTypeWhereUniqueInput
  }

  /**
   * Test1DataType updateMany
   */
  export type Test1DataTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Test1DataTypes.
     */
    data: XOR<Test1DataTypeUpdateManyMutationInput, Test1DataTypeUncheckedUpdateManyInput>
    /**
     * Filter which Test1DataTypes to update
     */
    where?: Test1DataTypeWhereInput
    /**
     * Limit how many Test1DataTypes to update.
     */
    limit?: number
  }

  /**
   * Test1DataType updateManyAndReturn
   */
  export type Test1DataTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * The data used to update Test1DataTypes.
     */
    data: XOR<Test1DataTypeUpdateManyMutationInput, Test1DataTypeUncheckedUpdateManyInput>
    /**
     * Filter which Test1DataTypes to update
     */
    where?: Test1DataTypeWhereInput
    /**
     * Limit how many Test1DataTypes to update.
     */
    limit?: number
  }

  /**
   * Test1DataType upsert
   */
  export type Test1DataTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the Test1DataType to update in case it exists.
     */
    where: Test1DataTypeWhereUniqueInput
    /**
     * In case the Test1DataType found by the `where` argument doesn't exist, create a new Test1DataType with this data.
     */
    create: XOR<Test1DataTypeCreateInput, Test1DataTypeUncheckedCreateInput>
    /**
     * In case the Test1DataType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Test1DataTypeUpdateInput, Test1DataTypeUncheckedUpdateInput>
  }

  /**
   * Test1DataType delete
   */
  export type Test1DataTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
    /**
     * Filter which Test1DataType to delete.
     */
    where: Test1DataTypeWhereUniqueInput
  }

  /**
   * Test1DataType deleteMany
   */
  export type Test1DataTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test1DataTypes to delete
     */
    where?: Test1DataTypeWhereInput
    /**
     * Limit how many Test1DataTypes to delete.
     */
    limit?: number
  }

  /**
   * Test1DataType without action
   */
  export type Test1DataTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test1DataType
     */
    select?: Test1DataTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test1DataType
     */
    omit?: Test1DataTypeOmit<ExtArgs> | null
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


  export const Test1DataModelScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name'
  };

  export type Test1DataModelScalarFieldEnum = (typeof Test1DataModelScalarFieldEnum)[keyof typeof Test1DataModelScalarFieldEnum]


  export const Test1DataTypeScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type Test1DataTypeScalarFieldEnum = (typeof Test1DataTypeScalarFieldEnum)[keyof typeof Test1DataTypeScalarFieldEnum]


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


  export type Test1DataModelWhereInput = {
    AND?: Test1DataModelWhereInput | Test1DataModelWhereInput[]
    OR?: Test1DataModelWhereInput[]
    NOT?: Test1DataModelWhereInput | Test1DataModelWhereInput[]
    id?: IntFilter<"Test1DataModel"> | number
    type?: StringFilter<"Test1DataModel"> | string
    name?: StringFilter<"Test1DataModel"> | string
  }

  export type Test1DataModelOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type Test1DataModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Test1DataModelWhereInput | Test1DataModelWhereInput[]
    OR?: Test1DataModelWhereInput[]
    NOT?: Test1DataModelWhereInput | Test1DataModelWhereInput[]
    type?: StringFilter<"Test1DataModel"> | string
    name?: StringFilter<"Test1DataModel"> | string
  }, "id">

  export type Test1DataModelOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    _count?: Test1DataModelCountOrderByAggregateInput
    _avg?: Test1DataModelAvgOrderByAggregateInput
    _max?: Test1DataModelMaxOrderByAggregateInput
    _min?: Test1DataModelMinOrderByAggregateInput
    _sum?: Test1DataModelSumOrderByAggregateInput
  }

  export type Test1DataModelScalarWhereWithAggregatesInput = {
    AND?: Test1DataModelScalarWhereWithAggregatesInput | Test1DataModelScalarWhereWithAggregatesInput[]
    OR?: Test1DataModelScalarWhereWithAggregatesInput[]
    NOT?: Test1DataModelScalarWhereWithAggregatesInput | Test1DataModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test1DataModel"> | number
    type?: StringWithAggregatesFilter<"Test1DataModel"> | string
    name?: StringWithAggregatesFilter<"Test1DataModel"> | string
  }

  export type Test1DataTypeWhereInput = {
    AND?: Test1DataTypeWhereInput | Test1DataTypeWhereInput[]
    OR?: Test1DataTypeWhereInput[]
    NOT?: Test1DataTypeWhereInput | Test1DataTypeWhereInput[]
    id?: IntFilter<"Test1DataType"> | number
    type?: StringFilter<"Test1DataType"> | string
  }

  export type Test1DataTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type Test1DataTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Test1DataTypeWhereInput | Test1DataTypeWhereInput[]
    OR?: Test1DataTypeWhereInput[]
    NOT?: Test1DataTypeWhereInput | Test1DataTypeWhereInput[]
    type?: StringFilter<"Test1DataType"> | string
  }, "id">

  export type Test1DataTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: Test1DataTypeCountOrderByAggregateInput
    _avg?: Test1DataTypeAvgOrderByAggregateInput
    _max?: Test1DataTypeMaxOrderByAggregateInput
    _min?: Test1DataTypeMinOrderByAggregateInput
    _sum?: Test1DataTypeSumOrderByAggregateInput
  }

  export type Test1DataTypeScalarWhereWithAggregatesInput = {
    AND?: Test1DataTypeScalarWhereWithAggregatesInput | Test1DataTypeScalarWhereWithAggregatesInput[]
    OR?: Test1DataTypeScalarWhereWithAggregatesInput[]
    NOT?: Test1DataTypeScalarWhereWithAggregatesInput | Test1DataTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test1DataType"> | number
    type?: StringWithAggregatesFilter<"Test1DataType"> | string
  }

  export type Test1DataModelCreateInput = {
    type: string
    name: string
  }

  export type Test1DataModelUncheckedCreateInput = {
    id?: number
    type: string
    name: string
  }

  export type Test1DataModelUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataModelCreateManyInput = {
    id?: number
    type: string
    name: string
  }

  export type Test1DataModelUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataTypeCreateInput = {
    type: string
  }

  export type Test1DataTypeUncheckedCreateInput = {
    id?: number
    type: string
  }

  export type Test1DataTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataTypeCreateManyInput = {
    id?: number
    type: string
  }

  export type Test1DataTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type Test1DataTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
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

  export type Test1DataModelCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type Test1DataModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Test1DataModelMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type Test1DataModelMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type Test1DataModelSumOrderByAggregateInput = {
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

  export type Test1DataTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type Test1DataTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Test1DataTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type Test1DataTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type Test1DataTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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