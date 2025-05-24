
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
 * Model ContactFormSubmission
 * 
 */
export type ContactFormSubmission = $Result.DefaultSelection<Prisma.$ContactFormSubmissionPayload>
/**
 * Model coupons
 * 
 */
export type coupons = $Result.DefaultSelection<Prisma.$couponsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ContactFormSubmissions
 * const contactFormSubmissions = await prisma.contactFormSubmission.findMany()
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
   * // Fetch zero or more ContactFormSubmissions
   * const contactFormSubmissions = await prisma.contactFormSubmission.findMany()
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
   * `prisma.contactFormSubmission`: Exposes CRUD operations for the **ContactFormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactFormSubmissions
    * const contactFormSubmissions = await prisma.contactFormSubmission.findMany()
    * ```
    */
  get contactFormSubmission(): Prisma.ContactFormSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupons`: Exposes CRUD operations for the **coupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupons.findMany()
    * ```
    */
  get coupons(): Prisma.couponsDelegate<ExtArgs, ClientOptions>;
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
    ContactFormSubmission: 'ContactFormSubmission',
    coupons: 'coupons'
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
      modelProps: "contactFormSubmission" | "coupons"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContactFormSubmission: {
        payload: Prisma.$ContactFormSubmissionPayload<ExtArgs>
        fields: Prisma.ContactFormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactFormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactFormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactFormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactFormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactFormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactFormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>
          }
          update: {
            args: Prisma.ContactFormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactFormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactFormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactFormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactFormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactFormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactFormSubmission>
          }
          groupBy: {
            args: Prisma.ContactFormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactFormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactFormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactFormSubmissionCountAggregateOutputType> | number
          }
        }
      }
      coupons: {
        payload: Prisma.$couponsPayload<ExtArgs>
        fields: Prisma.couponsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.couponsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.couponsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          findFirst: {
            args: Prisma.couponsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.couponsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          findMany: {
            args: Prisma.couponsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>[]
          }
          create: {
            args: Prisma.couponsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          createMany: {
            args: Prisma.couponsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.couponsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>[]
          }
          delete: {
            args: Prisma.couponsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          update: {
            args: Prisma.couponsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          deleteMany: {
            args: Prisma.couponsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.couponsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.couponsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>[]
          }
          upsert: {
            args: Prisma.couponsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          aggregate: {
            args: Prisma.CouponsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupons>
          }
          groupBy: {
            args: Prisma.couponsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponsGroupByOutputType>[]
          }
          count: {
            args: Prisma.couponsCountArgs<ExtArgs>
            result: $Utils.Optional<CouponsCountAggregateOutputType> | number
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
    contactFormSubmission?: ContactFormSubmissionOmit
    coupons?: couponsOmit
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
   * Count Type ContactFormSubmissionCountOutputType
   */

  export type ContactFormSubmissionCountOutputType = {
    coupons: number
  }

  export type ContactFormSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupons?: boolean | ContactFormSubmissionCountOutputTypeCountCouponsArgs
  }

  // Custom InputTypes
  /**
   * ContactFormSubmissionCountOutputType without action
   */
  export type ContactFormSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmissionCountOutputType
     */
    select?: ContactFormSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactFormSubmissionCountOutputType without action
   */
  export type ContactFormSubmissionCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: couponsWhereInput
  }


  /**
   * Count Type CouponsCountOutputType
   */

  export type CouponsCountOutputType = {
    ContactFormSubmission: number
  }

  export type CouponsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContactFormSubmission?: boolean | CouponsCountOutputTypeCountContactFormSubmissionArgs
  }

  // Custom InputTypes
  /**
   * CouponsCountOutputType without action
   */
  export type CouponsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponsCountOutputType
     */
    select?: CouponsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponsCountOutputType without action
   */
  export type CouponsCountOutputTypeCountContactFormSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactFormSubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ContactFormSubmission
   */

  export type AggregateContactFormSubmission = {
    _count: ContactFormSubmissionCountAggregateOutputType | null
    _avg: ContactFormSubmissionAvgAggregateOutputType | null
    _sum: ContactFormSubmissionSumAggregateOutputType | null
    _min: ContactFormSubmissionMinAggregateOutputType | null
    _max: ContactFormSubmissionMaxAggregateOutputType | null
  }

  export type ContactFormSubmissionAvgAggregateOutputType = {
    reviewAmount: number | null
  }

  export type ContactFormSubmissionSumAggregateOutputType = {
    reviewAmount: number | null
  }

  export type ContactFormSubmissionMinAggregateOutputType = {
    reviewAmount: number | null
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactFormSubmissionMaxAggregateOutputType = {
    reviewAmount: number | null
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactFormSubmissionCountAggregateOutputType = {
    reviewAmount: number
    id: number
    firstName: number
    lastName: number
    email: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactFormSubmissionAvgAggregateInputType = {
    reviewAmount?: true
  }

  export type ContactFormSubmissionSumAggregateInputType = {
    reviewAmount?: true
  }

  export type ContactFormSubmissionMinAggregateInputType = {
    reviewAmount?: true
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactFormSubmissionMaxAggregateInputType = {
    reviewAmount?: true
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactFormSubmissionCountAggregateInputType = {
    reviewAmount?: true
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactFormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactFormSubmission to aggregate.
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFormSubmissions to fetch.
     */
    orderBy?: ContactFormSubmissionOrderByWithRelationInput | ContactFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactFormSubmissions
    **/
    _count?: true | ContactFormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactFormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactFormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactFormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactFormSubmissionMaxAggregateInputType
  }

  export type GetContactFormSubmissionAggregateType<T extends ContactFormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactFormSubmission[P]>
      : GetScalarType<T[P], AggregateContactFormSubmission[P]>
  }




  export type ContactFormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactFormSubmissionWhereInput
    orderBy?: ContactFormSubmissionOrderByWithAggregationInput | ContactFormSubmissionOrderByWithAggregationInput[]
    by: ContactFormSubmissionScalarFieldEnum[] | ContactFormSubmissionScalarFieldEnum
    having?: ContactFormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactFormSubmissionCountAggregateInputType | true
    _avg?: ContactFormSubmissionAvgAggregateInputType
    _sum?: ContactFormSubmissionSumAggregateInputType
    _min?: ContactFormSubmissionMinAggregateInputType
    _max?: ContactFormSubmissionMaxAggregateInputType
  }

  export type ContactFormSubmissionGroupByOutputType = {
    reviewAmount: number
    id: string
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ContactFormSubmissionCountAggregateOutputType | null
    _avg: ContactFormSubmissionAvgAggregateOutputType | null
    _sum: ContactFormSubmissionSumAggregateOutputType | null
    _min: ContactFormSubmissionMinAggregateOutputType | null
    _max: ContactFormSubmissionMaxAggregateOutputType | null
  }

  type GetContactFormSubmissionGroupByPayload<T extends ContactFormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactFormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactFormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactFormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactFormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactFormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewAmount?: boolean
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coupons?: boolean | ContactFormSubmission$couponsArgs<ExtArgs>
    _count?: boolean | ContactFormSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactFormSubmission"]>

  export type ContactFormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewAmount?: boolean
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactFormSubmission"]>

  export type ContactFormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewAmount?: boolean
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactFormSubmission"]>

  export type ContactFormSubmissionSelectScalar = {
    reviewAmount?: boolean
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactFormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reviewAmount" | "id" | "firstName" | "lastName" | "email" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["contactFormSubmission"]>
  export type ContactFormSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupons?: boolean | ContactFormSubmission$couponsArgs<ExtArgs>
    _count?: boolean | ContactFormSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactFormSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactFormSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactFormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactFormSubmission"
    objects: {
      coupons: Prisma.$couponsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reviewAmount: number
      id: string
      firstName: string
      lastName: string
      email: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactFormSubmission"]>
    composites: {}
  }

  type ContactFormSubmissionGetPayload<S extends boolean | null | undefined | ContactFormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactFormSubmissionPayload, S>

  type ContactFormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactFormSubmissionCountAggregateInputType | true
    }

  export interface ContactFormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactFormSubmission'], meta: { name: 'ContactFormSubmission' } }
    /**
     * Find zero or one ContactFormSubmission that matches the filter.
     * @param {ContactFormSubmissionFindUniqueArgs} args - Arguments to find a ContactFormSubmission
     * @example
     * // Get one ContactFormSubmission
     * const contactFormSubmission = await prisma.contactFormSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFormSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactFormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactFormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactFormSubmission
     * @example
     * // Get one ContactFormSubmission
     * const contactFormSubmission = await prisma.contactFormSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactFormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionFindFirstArgs} args - Arguments to find a ContactFormSubmission
     * @example
     * // Get one ContactFormSubmission
     * const contactFormSubmission = await prisma.contactFormSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFormSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactFormSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactFormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactFormSubmission
     * @example
     * // Get one ContactFormSubmission
     * const contactFormSubmission = await prisma.contactFormSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactFormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactFormSubmissions
     * const contactFormSubmissions = await prisma.contactFormSubmission.findMany()
     * 
     * // Get first 10 ContactFormSubmissions
     * const contactFormSubmissions = await prisma.contactFormSubmission.findMany({ take: 10 })
     * 
     * // Only select the `reviewAmount`
     * const contactFormSubmissionWithReviewAmountOnly = await prisma.contactFormSubmission.findMany({ select: { reviewAmount: true } })
     * 
     */
    findMany<T extends ContactFormSubmissionFindManyArgs>(args?: SelectSubset<T, ContactFormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactFormSubmission.
     * @param {ContactFormSubmissionCreateArgs} args - Arguments to create a ContactFormSubmission.
     * @example
     * // Create one ContactFormSubmission
     * const ContactFormSubmission = await prisma.contactFormSubmission.create({
     *   data: {
     *     // ... data to create a ContactFormSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactFormSubmissionCreateArgs>(args: SelectSubset<T, ContactFormSubmissionCreateArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactFormSubmissions.
     * @param {ContactFormSubmissionCreateManyArgs} args - Arguments to create many ContactFormSubmissions.
     * @example
     * // Create many ContactFormSubmissions
     * const contactFormSubmission = await prisma.contactFormSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactFormSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactFormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactFormSubmissions and returns the data saved in the database.
     * @param {ContactFormSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactFormSubmissions.
     * @example
     * // Create many ContactFormSubmissions
     * const contactFormSubmission = await prisma.contactFormSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactFormSubmissions and only return the `reviewAmount`
     * const contactFormSubmissionWithReviewAmountOnly = await prisma.contactFormSubmission.createManyAndReturn({
     *   select: { reviewAmount: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactFormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactFormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactFormSubmission.
     * @param {ContactFormSubmissionDeleteArgs} args - Arguments to delete one ContactFormSubmission.
     * @example
     * // Delete one ContactFormSubmission
     * const ContactFormSubmission = await prisma.contactFormSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactFormSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactFormSubmissionDeleteArgs>(args: SelectSubset<T, ContactFormSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactFormSubmission.
     * @param {ContactFormSubmissionUpdateArgs} args - Arguments to update one ContactFormSubmission.
     * @example
     * // Update one ContactFormSubmission
     * const contactFormSubmission = await prisma.contactFormSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactFormSubmissionUpdateArgs>(args: SelectSubset<T, ContactFormSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactFormSubmissions.
     * @param {ContactFormSubmissionDeleteManyArgs} args - Arguments to filter ContactFormSubmissions to delete.
     * @example
     * // Delete a few ContactFormSubmissions
     * const { count } = await prisma.contactFormSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactFormSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactFormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactFormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactFormSubmissions
     * const contactFormSubmission = await prisma.contactFormSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactFormSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactFormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactFormSubmissions and returns the data updated in the database.
     * @param {ContactFormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactFormSubmissions.
     * @example
     * // Update many ContactFormSubmissions
     * const contactFormSubmission = await prisma.contactFormSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactFormSubmissions and only return the `reviewAmount`
     * const contactFormSubmissionWithReviewAmountOnly = await prisma.contactFormSubmission.updateManyAndReturn({
     *   select: { reviewAmount: true },
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
    updateManyAndReturn<T extends ContactFormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactFormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactFormSubmission.
     * @param {ContactFormSubmissionUpsertArgs} args - Arguments to update or create a ContactFormSubmission.
     * @example
     * // Update or create a ContactFormSubmission
     * const contactFormSubmission = await prisma.contactFormSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactFormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactFormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactFormSubmissionUpsertArgs>(args: SelectSubset<T, ContactFormSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactFormSubmissionClient<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactFormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionCountArgs} args - Arguments to filter ContactFormSubmissions to count.
     * @example
     * // Count the number of ContactFormSubmissions
     * const count = await prisma.contactFormSubmission.count({
     *   where: {
     *     // ... the filter for the ContactFormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactFormSubmissionCountArgs>(
      args?: Subset<T, ContactFormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactFormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactFormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactFormSubmissionAggregateArgs>(args: Subset<T, ContactFormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactFormSubmissionAggregateType<T>>

    /**
     * Group by ContactFormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ContactFormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactFormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactFormSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactFormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactFormSubmission model
   */
  readonly fields: ContactFormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactFormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactFormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coupons<T extends ContactFormSubmission$couponsArgs<ExtArgs> = {}>(args?: Subset<T, ContactFormSubmission$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ContactFormSubmission model
   */
  interface ContactFormSubmissionFieldRefs {
    readonly reviewAmount: FieldRef<"ContactFormSubmission", 'Int'>
    readonly id: FieldRef<"ContactFormSubmission", 'String'>
    readonly firstName: FieldRef<"ContactFormSubmission", 'String'>
    readonly lastName: FieldRef<"ContactFormSubmission", 'String'>
    readonly email: FieldRef<"ContactFormSubmission", 'String'>
    readonly message: FieldRef<"ContactFormSubmission", 'String'>
    readonly createdAt: FieldRef<"ContactFormSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactFormSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactFormSubmission findUnique
   */
  export type ContactFormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContactFormSubmission to fetch.
     */
    where: ContactFormSubmissionWhereUniqueInput
  }

  /**
   * ContactFormSubmission findUniqueOrThrow
   */
  export type ContactFormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContactFormSubmission to fetch.
     */
    where: ContactFormSubmissionWhereUniqueInput
  }

  /**
   * ContactFormSubmission findFirst
   */
  export type ContactFormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContactFormSubmission to fetch.
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFormSubmissions to fetch.
     */
    orderBy?: ContactFormSubmissionOrderByWithRelationInput | ContactFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactFormSubmissions.
     */
    cursor?: ContactFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactFormSubmissions.
     */
    distinct?: ContactFormSubmissionScalarFieldEnum | ContactFormSubmissionScalarFieldEnum[]
  }

  /**
   * ContactFormSubmission findFirstOrThrow
   */
  export type ContactFormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContactFormSubmission to fetch.
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFormSubmissions to fetch.
     */
    orderBy?: ContactFormSubmissionOrderByWithRelationInput | ContactFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactFormSubmissions.
     */
    cursor?: ContactFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactFormSubmissions.
     */
    distinct?: ContactFormSubmissionScalarFieldEnum | ContactFormSubmissionScalarFieldEnum[]
  }

  /**
   * ContactFormSubmission findMany
   */
  export type ContactFormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ContactFormSubmissions to fetch.
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFormSubmissions to fetch.
     */
    orderBy?: ContactFormSubmissionOrderByWithRelationInput | ContactFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactFormSubmissions.
     */
    cursor?: ContactFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFormSubmissions.
     */
    skip?: number
    distinct?: ContactFormSubmissionScalarFieldEnum | ContactFormSubmissionScalarFieldEnum[]
  }

  /**
   * ContactFormSubmission create
   */
  export type ContactFormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactFormSubmission.
     */
    data: XOR<ContactFormSubmissionCreateInput, ContactFormSubmissionUncheckedCreateInput>
  }

  /**
   * ContactFormSubmission createMany
   */
  export type ContactFormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactFormSubmissions.
     */
    data: ContactFormSubmissionCreateManyInput | ContactFormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactFormSubmission createManyAndReturn
   */
  export type ContactFormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactFormSubmissions.
     */
    data: ContactFormSubmissionCreateManyInput | ContactFormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactFormSubmission update
   */
  export type ContactFormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactFormSubmission.
     */
    data: XOR<ContactFormSubmissionUpdateInput, ContactFormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactFormSubmission to update.
     */
    where: ContactFormSubmissionWhereUniqueInput
  }

  /**
   * ContactFormSubmission updateMany
   */
  export type ContactFormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactFormSubmissions.
     */
    data: XOR<ContactFormSubmissionUpdateManyMutationInput, ContactFormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactFormSubmissions to update
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * Limit how many ContactFormSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactFormSubmission updateManyAndReturn
   */
  export type ContactFormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactFormSubmissions.
     */
    data: XOR<ContactFormSubmissionUpdateManyMutationInput, ContactFormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactFormSubmissions to update
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * Limit how many ContactFormSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactFormSubmission upsert
   */
  export type ContactFormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactFormSubmission to update in case it exists.
     */
    where: ContactFormSubmissionWhereUniqueInput
    /**
     * In case the ContactFormSubmission found by the `where` argument doesn't exist, create a new ContactFormSubmission with this data.
     */
    create: XOR<ContactFormSubmissionCreateInput, ContactFormSubmissionUncheckedCreateInput>
    /**
     * In case the ContactFormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactFormSubmissionUpdateInput, ContactFormSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactFormSubmission delete
   */
  export type ContactFormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ContactFormSubmission to delete.
     */
    where: ContactFormSubmissionWhereUniqueInput
  }

  /**
   * ContactFormSubmission deleteMany
   */
  export type ContactFormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactFormSubmissions to delete
     */
    where?: ContactFormSubmissionWhereInput
    /**
     * Limit how many ContactFormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactFormSubmission.coupons
   */
  export type ContactFormSubmission$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    where?: couponsWhereInput
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    cursor?: couponsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * ContactFormSubmission without action
   */
  export type ContactFormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model coupons
   */

  export type AggregateCoupons = {
    _count: CouponsCountAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  export type CouponsMinAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponsMaxAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponsCountAggregateOutputType = {
    id: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponsMinAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponsMaxAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponsCountAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coupons to aggregate.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coupons
    **/
    _count?: true | CouponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponsMaxAggregateInputType
  }

  export type GetCouponsAggregateType<T extends CouponsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupons[P]>
      : GetScalarType<T[P], AggregateCoupons[P]>
  }




  export type couponsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: couponsWhereInput
    orderBy?: couponsOrderByWithAggregationInput | couponsOrderByWithAggregationInput[]
    by: CouponsScalarFieldEnum[] | CouponsScalarFieldEnum
    having?: couponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponsCountAggregateInputType | true
    _min?: CouponsMinAggregateInputType
    _max?: CouponsMaxAggregateInputType
  }

  export type CouponsGroupByOutputType = {
    id: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: CouponsCountAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  type GetCouponsGroupByPayload<T extends couponsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponsGroupByOutputType[P]>
            : GetScalarType<T[P], CouponsGroupByOutputType[P]>
        }
      >
    >


  export type couponsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ContactFormSubmission?: boolean | coupons$ContactFormSubmissionArgs<ExtArgs>
    _count?: boolean | CouponsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupons"]>

  export type couponsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coupons"]>

  export type couponsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coupons"]>

  export type couponsSelectScalar = {
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type couponsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["coupons"]>
  export type couponsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContactFormSubmission?: boolean | coupons$ContactFormSubmissionArgs<ExtArgs>
    _count?: boolean | CouponsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type couponsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type couponsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $couponsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "coupons"
    objects: {
      ContactFormSubmission: Prisma.$ContactFormSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupons"]>
    composites: {}
  }

  type couponsGetPayload<S extends boolean | null | undefined | couponsDefaultArgs> = $Result.GetResult<Prisma.$couponsPayload, S>

  type couponsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<couponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponsCountAggregateInputType | true
    }

  export interface couponsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['coupons'], meta: { name: 'coupons' } }
    /**
     * Find zero or one Coupons that matches the filter.
     * @param {couponsFindUniqueArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends couponsFindUniqueArgs>(args: SelectSubset<T, couponsFindUniqueArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {couponsFindUniqueOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends couponsFindUniqueOrThrowArgs>(args: SelectSubset<T, couponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindFirstArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends couponsFindFirstArgs>(args?: SelectSubset<T, couponsFindFirstArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindFirstOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends couponsFindFirstOrThrowArgs>(args?: SelectSubset<T, couponsFindFirstOrThrowArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupons.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponsWithIdOnly = await prisma.coupons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends couponsFindManyArgs>(args?: SelectSubset<T, couponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupons.
     * @param {couponsCreateArgs} args - Arguments to create a Coupons.
     * @example
     * // Create one Coupons
     * const Coupons = await prisma.coupons.create({
     *   data: {
     *     // ... data to create a Coupons
     *   }
     * })
     * 
     */
    create<T extends couponsCreateArgs>(args: SelectSubset<T, couponsCreateArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {couponsCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupons = await prisma.coupons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends couponsCreateManyArgs>(args?: SelectSubset<T, couponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {couponsCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupons = await prisma.coupons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponsWithIdOnly = await prisma.coupons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends couponsCreateManyAndReturnArgs>(args?: SelectSubset<T, couponsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupons.
     * @param {couponsDeleteArgs} args - Arguments to delete one Coupons.
     * @example
     * // Delete one Coupons
     * const Coupons = await prisma.coupons.delete({
     *   where: {
     *     // ... filter to delete one Coupons
     *   }
     * })
     * 
     */
    delete<T extends couponsDeleteArgs>(args: SelectSubset<T, couponsDeleteArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupons.
     * @param {couponsUpdateArgs} args - Arguments to update one Coupons.
     * @example
     * // Update one Coupons
     * const coupons = await prisma.coupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends couponsUpdateArgs>(args: SelectSubset<T, couponsUpdateArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {couponsDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends couponsDeleteManyArgs>(args?: SelectSubset<T, couponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends couponsUpdateManyArgs>(args: SelectSubset<T, couponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {couponsUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `id`
     * const couponsWithIdOnly = await prisma.coupons.updateManyAndReturn({
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
    updateManyAndReturn<T extends couponsUpdateManyAndReturnArgs>(args: SelectSubset<T, couponsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupons.
     * @param {couponsUpsertArgs} args - Arguments to update or create a Coupons.
     * @example
     * // Update or create a Coupons
     * const coupons = await prisma.coupons.upsert({
     *   create: {
     *     // ... data to create a Coupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupons we want to update
     *   }
     * })
     */
    upsert<T extends couponsUpsertArgs>(args: SelectSubset<T, couponsUpsertArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupons.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends couponsCountArgs>(
      args?: Subset<T, couponsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponsAggregateArgs>(args: Subset<T, CouponsAggregateArgs>): Prisma.PrismaPromise<GetCouponsAggregateType<T>>

    /**
     * Group by Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsGroupByArgs} args - Group by arguments.
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
      T extends couponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: couponsGroupByArgs['orderBy'] }
        : { orderBy?: couponsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, couponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the coupons model
   */
  readonly fields: couponsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for coupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__couponsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ContactFormSubmission<T extends coupons$ContactFormSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, coupons$ContactFormSubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the coupons model
   */
  interface couponsFieldRefs {
    readonly id: FieldRef<"coupons", 'String'>
    readonly code: FieldRef<"coupons", 'String'>
    readonly createdAt: FieldRef<"coupons", 'DateTime'>
    readonly updatedAt: FieldRef<"coupons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * coupons findUnique
   */
  export type couponsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons findUniqueOrThrow
   */
  export type couponsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons findFirst
   */
  export type couponsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     */
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * coupons findFirstOrThrow
   */
  export type couponsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     */
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * coupons findMany
   */
  export type couponsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coupons.
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * coupons create
   */
  export type couponsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * The data needed to create a coupons.
     */
    data: XOR<couponsCreateInput, couponsUncheckedCreateInput>
  }

  /**
   * coupons createMany
   */
  export type couponsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many coupons.
     */
    data: couponsCreateManyInput | couponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * coupons createManyAndReturn
   */
  export type couponsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * The data used to create many coupons.
     */
    data: couponsCreateManyInput | couponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * coupons update
   */
  export type couponsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * The data needed to update a coupons.
     */
    data: XOR<couponsUpdateInput, couponsUncheckedUpdateInput>
    /**
     * Choose, which coupons to update.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons updateMany
   */
  export type couponsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update coupons.
     */
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyInput>
    /**
     * Filter which coupons to update
     */
    where?: couponsWhereInput
    /**
     * Limit how many coupons to update.
     */
    limit?: number
  }

  /**
   * coupons updateManyAndReturn
   */
  export type couponsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * The data used to update coupons.
     */
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyInput>
    /**
     * Filter which coupons to update
     */
    where?: couponsWhereInput
    /**
     * Limit how many coupons to update.
     */
    limit?: number
  }

  /**
   * coupons upsert
   */
  export type couponsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * The filter to search for the coupons to update in case it exists.
     */
    where: couponsWhereUniqueInput
    /**
     * In case the coupons found by the `where` argument doesn't exist, create a new coupons with this data.
     */
    create: XOR<couponsCreateInput, couponsUncheckedCreateInput>
    /**
     * In case the coupons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<couponsUpdateInput, couponsUncheckedUpdateInput>
  }

  /**
   * coupons delete
   */
  export type couponsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter which coupons to delete.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons deleteMany
   */
  export type couponsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coupons to delete
     */
    where?: couponsWhereInput
    /**
     * Limit how many coupons to delete.
     */
    limit?: number
  }

  /**
   * coupons.ContactFormSubmission
   */
  export type coupons$ContactFormSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormSubmission
     */
    select?: ContactFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFormSubmission
     */
    omit?: ContactFormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormSubmissionInclude<ExtArgs> | null
    where?: ContactFormSubmissionWhereInput
    orderBy?: ContactFormSubmissionOrderByWithRelationInput | ContactFormSubmissionOrderByWithRelationInput[]
    cursor?: ContactFormSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactFormSubmissionScalarFieldEnum | ContactFormSubmissionScalarFieldEnum[]
  }

  /**
   * coupons without action
   */
  export type couponsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
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


  export const ContactFormSubmissionScalarFieldEnum: {
    reviewAmount: 'reviewAmount',
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactFormSubmissionScalarFieldEnum = (typeof ContactFormSubmissionScalarFieldEnum)[keyof typeof ContactFormSubmissionScalarFieldEnum]


  export const CouponsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponsScalarFieldEnum = (typeof CouponsScalarFieldEnum)[keyof typeof CouponsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type ContactFormSubmissionWhereInput = {
    AND?: ContactFormSubmissionWhereInput | ContactFormSubmissionWhereInput[]
    OR?: ContactFormSubmissionWhereInput[]
    NOT?: ContactFormSubmissionWhereInput | ContactFormSubmissionWhereInput[]
    reviewAmount?: IntFilter<"ContactFormSubmission"> | number
    id?: StringFilter<"ContactFormSubmission"> | string
    firstName?: StringFilter<"ContactFormSubmission"> | string
    lastName?: StringFilter<"ContactFormSubmission"> | string
    email?: StringFilter<"ContactFormSubmission"> | string
    message?: StringFilter<"ContactFormSubmission"> | string
    createdAt?: DateTimeFilter<"ContactFormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactFormSubmission"> | Date | string
    coupons?: CouponsListRelationFilter
  }

  export type ContactFormSubmissionOrderByWithRelationInput = {
    reviewAmount?: SortOrder
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coupons?: couponsOrderByRelationAggregateInput
  }

  export type ContactFormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactFormSubmissionWhereInput | ContactFormSubmissionWhereInput[]
    OR?: ContactFormSubmissionWhereInput[]
    NOT?: ContactFormSubmissionWhereInput | ContactFormSubmissionWhereInput[]
    reviewAmount?: IntFilter<"ContactFormSubmission"> | number
    firstName?: StringFilter<"ContactFormSubmission"> | string
    lastName?: StringFilter<"ContactFormSubmission"> | string
    email?: StringFilter<"ContactFormSubmission"> | string
    message?: StringFilter<"ContactFormSubmission"> | string
    createdAt?: DateTimeFilter<"ContactFormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactFormSubmission"> | Date | string
    coupons?: CouponsListRelationFilter
  }, "id">

  export type ContactFormSubmissionOrderByWithAggregationInput = {
    reviewAmount?: SortOrder
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactFormSubmissionCountOrderByAggregateInput
    _avg?: ContactFormSubmissionAvgOrderByAggregateInput
    _max?: ContactFormSubmissionMaxOrderByAggregateInput
    _min?: ContactFormSubmissionMinOrderByAggregateInput
    _sum?: ContactFormSubmissionSumOrderByAggregateInput
  }

  export type ContactFormSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactFormSubmissionScalarWhereWithAggregatesInput | ContactFormSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactFormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactFormSubmissionScalarWhereWithAggregatesInput | ContactFormSubmissionScalarWhereWithAggregatesInput[]
    reviewAmount?: IntWithAggregatesFilter<"ContactFormSubmission"> | number
    id?: StringWithAggregatesFilter<"ContactFormSubmission"> | string
    firstName?: StringWithAggregatesFilter<"ContactFormSubmission"> | string
    lastName?: StringWithAggregatesFilter<"ContactFormSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactFormSubmission"> | string
    message?: StringWithAggregatesFilter<"ContactFormSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactFormSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactFormSubmission"> | Date | string
  }

  export type couponsWhereInput = {
    AND?: couponsWhereInput | couponsWhereInput[]
    OR?: couponsWhereInput[]
    NOT?: couponsWhereInput | couponsWhereInput[]
    id?: StringFilter<"coupons"> | string
    code?: StringFilter<"coupons"> | string
    createdAt?: DateTimeFilter<"coupons"> | Date | string
    updatedAt?: DateTimeFilter<"coupons"> | Date | string
    ContactFormSubmission?: ContactFormSubmissionListRelationFilter
  }

  export type couponsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ContactFormSubmission?: ContactFormSubmissionOrderByRelationAggregateInput
  }

  export type couponsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: couponsWhereInput | couponsWhereInput[]
    OR?: couponsWhereInput[]
    NOT?: couponsWhereInput | couponsWhereInput[]
    createdAt?: DateTimeFilter<"coupons"> | Date | string
    updatedAt?: DateTimeFilter<"coupons"> | Date | string
    ContactFormSubmission?: ContactFormSubmissionListRelationFilter
  }, "id" | "code">

  export type couponsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: couponsCountOrderByAggregateInput
    _max?: couponsMaxOrderByAggregateInput
    _min?: couponsMinOrderByAggregateInput
  }

  export type couponsScalarWhereWithAggregatesInput = {
    AND?: couponsScalarWhereWithAggregatesInput | couponsScalarWhereWithAggregatesInput[]
    OR?: couponsScalarWhereWithAggregatesInput[]
    NOT?: couponsScalarWhereWithAggregatesInput | couponsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"coupons"> | string
    code?: StringWithAggregatesFilter<"coupons"> | string
    createdAt?: DateTimeWithAggregatesFilter<"coupons"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"coupons"> | Date | string
  }

  export type ContactFormSubmissionCreateInput = {
    reviewAmount: number
    id?: string
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: couponsCreateNestedManyWithoutContactFormSubmissionInput
  }

  export type ContactFormSubmissionUncheckedCreateInput = {
    reviewAmount: number
    id?: string
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: couponsUncheckedCreateNestedManyWithoutContactFormSubmissionInput
  }

  export type ContactFormSubmissionUpdateInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: couponsUpdateManyWithoutContactFormSubmissionNestedInput
  }

  export type ContactFormSubmissionUncheckedUpdateInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: couponsUncheckedUpdateManyWithoutContactFormSubmissionNestedInput
  }

  export type ContactFormSubmissionCreateManyInput = {
    reviewAmount: number
    id?: string
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactFormSubmissionUpdateManyMutationInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormSubmissionUncheckedUpdateManyInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type couponsCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ContactFormSubmission?: ContactFormSubmissionCreateNestedManyWithoutCouponsInput
  }

  export type couponsUncheckedCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ContactFormSubmission?: ContactFormSubmissionUncheckedCreateNestedManyWithoutCouponsInput
  }

  export type couponsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ContactFormSubmission?: ContactFormSubmissionUpdateManyWithoutCouponsNestedInput
  }

  export type couponsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ContactFormSubmission?: ContactFormSubmissionUncheckedUpdateManyWithoutCouponsNestedInput
  }

  export type couponsCreateManyInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type couponsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type couponsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CouponsListRelationFilter = {
    every?: couponsWhereInput
    some?: couponsWhereInput
    none?: couponsWhereInput
  }

  export type couponsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactFormSubmissionCountOrderByAggregateInput = {
    reviewAmount?: SortOrder
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactFormSubmissionAvgOrderByAggregateInput = {
    reviewAmount?: SortOrder
  }

  export type ContactFormSubmissionMaxOrderByAggregateInput = {
    reviewAmount?: SortOrder
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactFormSubmissionMinOrderByAggregateInput = {
    reviewAmount?: SortOrder
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactFormSubmissionSumOrderByAggregateInput = {
    reviewAmount?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContactFormSubmissionListRelationFilter = {
    every?: ContactFormSubmissionWhereInput
    some?: ContactFormSubmissionWhereInput
    none?: ContactFormSubmissionWhereInput
  }

  export type ContactFormSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type couponsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type couponsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type couponsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type couponsCreateNestedManyWithoutContactFormSubmissionInput = {
    create?: XOR<couponsCreateWithoutContactFormSubmissionInput, couponsUncheckedCreateWithoutContactFormSubmissionInput> | couponsCreateWithoutContactFormSubmissionInput[] | couponsUncheckedCreateWithoutContactFormSubmissionInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutContactFormSubmissionInput | couponsCreateOrConnectWithoutContactFormSubmissionInput[]
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
  }

  export type couponsUncheckedCreateNestedManyWithoutContactFormSubmissionInput = {
    create?: XOR<couponsCreateWithoutContactFormSubmissionInput, couponsUncheckedCreateWithoutContactFormSubmissionInput> | couponsCreateWithoutContactFormSubmissionInput[] | couponsUncheckedCreateWithoutContactFormSubmissionInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutContactFormSubmissionInput | couponsCreateOrConnectWithoutContactFormSubmissionInput[]
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type couponsUpdateManyWithoutContactFormSubmissionNestedInput = {
    create?: XOR<couponsCreateWithoutContactFormSubmissionInput, couponsUncheckedCreateWithoutContactFormSubmissionInput> | couponsCreateWithoutContactFormSubmissionInput[] | couponsUncheckedCreateWithoutContactFormSubmissionInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutContactFormSubmissionInput | couponsCreateOrConnectWithoutContactFormSubmissionInput[]
    upsert?: couponsUpsertWithWhereUniqueWithoutContactFormSubmissionInput | couponsUpsertWithWhereUniqueWithoutContactFormSubmissionInput[]
    set?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    disconnect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    delete?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    update?: couponsUpdateWithWhereUniqueWithoutContactFormSubmissionInput | couponsUpdateWithWhereUniqueWithoutContactFormSubmissionInput[]
    updateMany?: couponsUpdateManyWithWhereWithoutContactFormSubmissionInput | couponsUpdateManyWithWhereWithoutContactFormSubmissionInput[]
    deleteMany?: couponsScalarWhereInput | couponsScalarWhereInput[]
  }

  export type couponsUncheckedUpdateManyWithoutContactFormSubmissionNestedInput = {
    create?: XOR<couponsCreateWithoutContactFormSubmissionInput, couponsUncheckedCreateWithoutContactFormSubmissionInput> | couponsCreateWithoutContactFormSubmissionInput[] | couponsUncheckedCreateWithoutContactFormSubmissionInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutContactFormSubmissionInput | couponsCreateOrConnectWithoutContactFormSubmissionInput[]
    upsert?: couponsUpsertWithWhereUniqueWithoutContactFormSubmissionInput | couponsUpsertWithWhereUniqueWithoutContactFormSubmissionInput[]
    set?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    disconnect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    delete?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    update?: couponsUpdateWithWhereUniqueWithoutContactFormSubmissionInput | couponsUpdateWithWhereUniqueWithoutContactFormSubmissionInput[]
    updateMany?: couponsUpdateManyWithWhereWithoutContactFormSubmissionInput | couponsUpdateManyWithWhereWithoutContactFormSubmissionInput[]
    deleteMany?: couponsScalarWhereInput | couponsScalarWhereInput[]
  }

  export type ContactFormSubmissionCreateNestedManyWithoutCouponsInput = {
    create?: XOR<ContactFormSubmissionCreateWithoutCouponsInput, ContactFormSubmissionUncheckedCreateWithoutCouponsInput> | ContactFormSubmissionCreateWithoutCouponsInput[] | ContactFormSubmissionUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: ContactFormSubmissionCreateOrConnectWithoutCouponsInput | ContactFormSubmissionCreateOrConnectWithoutCouponsInput[]
    connect?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
  }

  export type ContactFormSubmissionUncheckedCreateNestedManyWithoutCouponsInput = {
    create?: XOR<ContactFormSubmissionCreateWithoutCouponsInput, ContactFormSubmissionUncheckedCreateWithoutCouponsInput> | ContactFormSubmissionCreateWithoutCouponsInput[] | ContactFormSubmissionUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: ContactFormSubmissionCreateOrConnectWithoutCouponsInput | ContactFormSubmissionCreateOrConnectWithoutCouponsInput[]
    connect?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
  }

  export type ContactFormSubmissionUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<ContactFormSubmissionCreateWithoutCouponsInput, ContactFormSubmissionUncheckedCreateWithoutCouponsInput> | ContactFormSubmissionCreateWithoutCouponsInput[] | ContactFormSubmissionUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: ContactFormSubmissionCreateOrConnectWithoutCouponsInput | ContactFormSubmissionCreateOrConnectWithoutCouponsInput[]
    upsert?: ContactFormSubmissionUpsertWithWhereUniqueWithoutCouponsInput | ContactFormSubmissionUpsertWithWhereUniqueWithoutCouponsInput[]
    set?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    disconnect?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    delete?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    connect?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    update?: ContactFormSubmissionUpdateWithWhereUniqueWithoutCouponsInput | ContactFormSubmissionUpdateWithWhereUniqueWithoutCouponsInput[]
    updateMany?: ContactFormSubmissionUpdateManyWithWhereWithoutCouponsInput | ContactFormSubmissionUpdateManyWithWhereWithoutCouponsInput[]
    deleteMany?: ContactFormSubmissionScalarWhereInput | ContactFormSubmissionScalarWhereInput[]
  }

  export type ContactFormSubmissionUncheckedUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<ContactFormSubmissionCreateWithoutCouponsInput, ContactFormSubmissionUncheckedCreateWithoutCouponsInput> | ContactFormSubmissionCreateWithoutCouponsInput[] | ContactFormSubmissionUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: ContactFormSubmissionCreateOrConnectWithoutCouponsInput | ContactFormSubmissionCreateOrConnectWithoutCouponsInput[]
    upsert?: ContactFormSubmissionUpsertWithWhereUniqueWithoutCouponsInput | ContactFormSubmissionUpsertWithWhereUniqueWithoutCouponsInput[]
    set?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    disconnect?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    delete?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    connect?: ContactFormSubmissionWhereUniqueInput | ContactFormSubmissionWhereUniqueInput[]
    update?: ContactFormSubmissionUpdateWithWhereUniqueWithoutCouponsInput | ContactFormSubmissionUpdateWithWhereUniqueWithoutCouponsInput[]
    updateMany?: ContactFormSubmissionUpdateManyWithWhereWithoutCouponsInput | ContactFormSubmissionUpdateManyWithWhereWithoutCouponsInput[]
    deleteMany?: ContactFormSubmissionScalarWhereInput | ContactFormSubmissionScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type couponsCreateWithoutContactFormSubmissionInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type couponsUncheckedCreateWithoutContactFormSubmissionInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type couponsCreateOrConnectWithoutContactFormSubmissionInput = {
    where: couponsWhereUniqueInput
    create: XOR<couponsCreateWithoutContactFormSubmissionInput, couponsUncheckedCreateWithoutContactFormSubmissionInput>
  }

  export type couponsUpsertWithWhereUniqueWithoutContactFormSubmissionInput = {
    where: couponsWhereUniqueInput
    update: XOR<couponsUpdateWithoutContactFormSubmissionInput, couponsUncheckedUpdateWithoutContactFormSubmissionInput>
    create: XOR<couponsCreateWithoutContactFormSubmissionInput, couponsUncheckedCreateWithoutContactFormSubmissionInput>
  }

  export type couponsUpdateWithWhereUniqueWithoutContactFormSubmissionInput = {
    where: couponsWhereUniqueInput
    data: XOR<couponsUpdateWithoutContactFormSubmissionInput, couponsUncheckedUpdateWithoutContactFormSubmissionInput>
  }

  export type couponsUpdateManyWithWhereWithoutContactFormSubmissionInput = {
    where: couponsScalarWhereInput
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyWithoutContactFormSubmissionInput>
  }

  export type couponsScalarWhereInput = {
    AND?: couponsScalarWhereInput | couponsScalarWhereInput[]
    OR?: couponsScalarWhereInput[]
    NOT?: couponsScalarWhereInput | couponsScalarWhereInput[]
    id?: StringFilter<"coupons"> | string
    code?: StringFilter<"coupons"> | string
    createdAt?: DateTimeFilter<"coupons"> | Date | string
    updatedAt?: DateTimeFilter<"coupons"> | Date | string
  }

  export type ContactFormSubmissionCreateWithoutCouponsInput = {
    reviewAmount: number
    id?: string
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactFormSubmissionUncheckedCreateWithoutCouponsInput = {
    reviewAmount: number
    id?: string
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactFormSubmissionCreateOrConnectWithoutCouponsInput = {
    where: ContactFormSubmissionWhereUniqueInput
    create: XOR<ContactFormSubmissionCreateWithoutCouponsInput, ContactFormSubmissionUncheckedCreateWithoutCouponsInput>
  }

  export type ContactFormSubmissionUpsertWithWhereUniqueWithoutCouponsInput = {
    where: ContactFormSubmissionWhereUniqueInput
    update: XOR<ContactFormSubmissionUpdateWithoutCouponsInput, ContactFormSubmissionUncheckedUpdateWithoutCouponsInput>
    create: XOR<ContactFormSubmissionCreateWithoutCouponsInput, ContactFormSubmissionUncheckedCreateWithoutCouponsInput>
  }

  export type ContactFormSubmissionUpdateWithWhereUniqueWithoutCouponsInput = {
    where: ContactFormSubmissionWhereUniqueInput
    data: XOR<ContactFormSubmissionUpdateWithoutCouponsInput, ContactFormSubmissionUncheckedUpdateWithoutCouponsInput>
  }

  export type ContactFormSubmissionUpdateManyWithWhereWithoutCouponsInput = {
    where: ContactFormSubmissionScalarWhereInput
    data: XOR<ContactFormSubmissionUpdateManyMutationInput, ContactFormSubmissionUncheckedUpdateManyWithoutCouponsInput>
  }

  export type ContactFormSubmissionScalarWhereInput = {
    AND?: ContactFormSubmissionScalarWhereInput | ContactFormSubmissionScalarWhereInput[]
    OR?: ContactFormSubmissionScalarWhereInput[]
    NOT?: ContactFormSubmissionScalarWhereInput | ContactFormSubmissionScalarWhereInput[]
    reviewAmount?: IntFilter<"ContactFormSubmission"> | number
    id?: StringFilter<"ContactFormSubmission"> | string
    firstName?: StringFilter<"ContactFormSubmission"> | string
    lastName?: StringFilter<"ContactFormSubmission"> | string
    email?: StringFilter<"ContactFormSubmission"> | string
    message?: StringFilter<"ContactFormSubmission"> | string
    createdAt?: DateTimeFilter<"ContactFormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactFormSubmission"> | Date | string
  }

  export type couponsUpdateWithoutContactFormSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type couponsUncheckedUpdateWithoutContactFormSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type couponsUncheckedUpdateManyWithoutContactFormSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormSubmissionUpdateWithoutCouponsInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormSubmissionUncheckedUpdateWithoutCouponsInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormSubmissionUncheckedUpdateManyWithoutCouponsInput = {
    reviewAmount?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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