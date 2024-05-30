
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CreateInternship
 * 
 */
export type CreateInternship = $Result.DefaultSelection<Prisma.$CreateInternshipPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.createInternship`: Exposes CRUD operations for the **CreateInternship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreateInternships
    * const createInternships = await prisma.createInternship.findMany()
    * ```
    */
  get createInternship(): Prisma.CreateInternshipDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Company: 'Company',
    CreateInternship: 'CreateInternship'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'createInternship'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CreateInternship: {
        payload: Prisma.$CreateInternshipPayload<ExtArgs>
        fields: Prisma.CreateInternshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreateInternshipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreateInternshipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>
          }
          findFirst: {
            args: Prisma.CreateInternshipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreateInternshipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>
          }
          findMany: {
            args: Prisma.CreateInternshipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>[]
          }
          create: {
            args: Prisma.CreateInternshipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>
          }
          createMany: {
            args: Prisma.CreateInternshipCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreateInternshipCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>[]
          }
          delete: {
            args: Prisma.CreateInternshipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>
          }
          update: {
            args: Prisma.CreateInternshipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>
          }
          deleteMany: {
            args: Prisma.CreateInternshipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CreateInternshipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CreateInternshipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreateInternshipPayload>
          }
          aggregate: {
            args: Prisma.CreateInternshipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCreateInternship>
          }
          groupBy: {
            args: Prisma.CreateInternshipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CreateInternshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreateInternshipCountArgs<ExtArgs>,
            result: $Utils.Optional<CreateInternshipCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    projects: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CompanyCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreateInternshipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    CompanyDescription: string | null
    CompanyImageUrl: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    CompanyDescription: string | null
    CompanyImageUrl: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    CompanyDescription: number
    CompanyImageUrl: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    CompanyDescription?: true
    CompanyImageUrl?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    CompanyDescription?: true
    CompanyImageUrl?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    CompanyDescription?: true
    CompanyImageUrl?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    userId: string
    name: string
    CompanyDescription: string | null
    CompanyImageUrl: string | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    CompanyDescription?: boolean
    CompanyImageUrl?: boolean
    projects?: boolean | Company$projectsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    CompanyDescription?: boolean
    CompanyImageUrl?: boolean
  }


  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Company$projectsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      projects: Prisma.$CreateInternshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      CompanyDescription: string | null
      CompanyImageUrl: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    projects<T extends Company$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Company$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly userId: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly CompanyDescription: FieldRef<"Company", 'String'>
    readonly CompanyImageUrl: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.projects
   */
  export type Company$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    where?: CreateInternshipWhereInput
    orderBy?: CreateInternshipOrderByWithRelationInput | CreateInternshipOrderByWithRelationInput[]
    cursor?: CreateInternshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreateInternshipScalarFieldEnum | CreateInternshipScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CreateInternship
   */

  export type AggregateCreateInternship = {
    _count: CreateInternshipCountAggregateOutputType | null
    _min: CreateInternshipMinAggregateOutputType | null
    _max: CreateInternshipMaxAggregateOutputType | null
  }

  export type CreateInternshipMinAggregateOutputType = {
    id: string | null
    name: string | null
    EducationLevel: string | null
    InternshipDescription: string | null
    InternshipRequirement: string | null
    Paid: boolean | null
    AmountPaid: string | null
    userId: string | null
  }

  export type CreateInternshipMaxAggregateOutputType = {
    id: string | null
    name: string | null
    EducationLevel: string | null
    InternshipDescription: string | null
    InternshipRequirement: string | null
    Paid: boolean | null
    AmountPaid: string | null
    userId: string | null
  }

  export type CreateInternshipCountAggregateOutputType = {
    id: number
    name: number
    EducationLevel: number
    InternshipDescription: number
    InternshipRequirement: number
    Paid: number
    AmountPaid: number
    userId: number
    _all: number
  }


  export type CreateInternshipMinAggregateInputType = {
    id?: true
    name?: true
    EducationLevel?: true
    InternshipDescription?: true
    InternshipRequirement?: true
    Paid?: true
    AmountPaid?: true
    userId?: true
  }

  export type CreateInternshipMaxAggregateInputType = {
    id?: true
    name?: true
    EducationLevel?: true
    InternshipDescription?: true
    InternshipRequirement?: true
    Paid?: true
    AmountPaid?: true
    userId?: true
  }

  export type CreateInternshipCountAggregateInputType = {
    id?: true
    name?: true
    EducationLevel?: true
    InternshipDescription?: true
    InternshipRequirement?: true
    Paid?: true
    AmountPaid?: true
    userId?: true
    _all?: true
  }

  export type CreateInternshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreateInternship to aggregate.
     */
    where?: CreateInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreateInternships to fetch.
     */
    orderBy?: CreateInternshipOrderByWithRelationInput | CreateInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreateInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreateInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreateInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreateInternships
    **/
    _count?: true | CreateInternshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreateInternshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreateInternshipMaxAggregateInputType
  }

  export type GetCreateInternshipAggregateType<T extends CreateInternshipAggregateArgs> = {
        [P in keyof T & keyof AggregateCreateInternship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreateInternship[P]>
      : GetScalarType<T[P], AggregateCreateInternship[P]>
  }




  export type CreateInternshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreateInternshipWhereInput
    orderBy?: CreateInternshipOrderByWithAggregationInput | CreateInternshipOrderByWithAggregationInput[]
    by: CreateInternshipScalarFieldEnum[] | CreateInternshipScalarFieldEnum
    having?: CreateInternshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreateInternshipCountAggregateInputType | true
    _min?: CreateInternshipMinAggregateInputType
    _max?: CreateInternshipMaxAggregateInputType
  }

  export type CreateInternshipGroupByOutputType = {
    id: string
    name: string
    EducationLevel: string | null
    InternshipDescription: string | null
    InternshipRequirement: string | null
    Paid: boolean
    AmountPaid: string | null
    userId: string
    _count: CreateInternshipCountAggregateOutputType | null
    _min: CreateInternshipMinAggregateOutputType | null
    _max: CreateInternshipMaxAggregateOutputType | null
  }

  type GetCreateInternshipGroupByPayload<T extends CreateInternshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreateInternshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreateInternshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreateInternshipGroupByOutputType[P]>
            : GetScalarType<T[P], CreateInternshipGroupByOutputType[P]>
        }
      >
    >


  export type CreateInternshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    EducationLevel?: boolean
    InternshipDescription?: boolean
    InternshipRequirement?: boolean
    Paid?: boolean
    AmountPaid?: boolean
    userId?: boolean
    user?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createInternship"]>

  export type CreateInternshipSelectScalar = {
    id?: boolean
    name?: boolean
    EducationLevel?: boolean
    InternshipDescription?: boolean
    InternshipRequirement?: boolean
    Paid?: boolean
    AmountPaid?: boolean
    userId?: boolean
  }


  export type CreateInternshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyDefaultArgs<ExtArgs>
  }


  export type $CreateInternshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreateInternship"
    objects: {
      user: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      EducationLevel: string | null
      InternshipDescription: string | null
      InternshipRequirement: string | null
      Paid: boolean
      AmountPaid: string | null
      userId: string
    }, ExtArgs["result"]["createInternship"]>
    composites: {}
  }


  type CreateInternshipGetPayload<S extends boolean | null | undefined | CreateInternshipDefaultArgs> = $Result.GetResult<Prisma.$CreateInternshipPayload, S>

  type CreateInternshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreateInternshipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreateInternshipCountAggregateInputType | true
    }

  export interface CreateInternshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreateInternship'], meta: { name: 'CreateInternship' } }
    /**
     * Find zero or one CreateInternship that matches the filter.
     * @param {CreateInternshipFindUniqueArgs} args - Arguments to find a CreateInternship
     * @example
     * // Get one CreateInternship
     * const createInternship = await prisma.createInternship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CreateInternshipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CreateInternshipFindUniqueArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CreateInternship that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreateInternshipFindUniqueOrThrowArgs} args - Arguments to find a CreateInternship
     * @example
     * // Get one CreateInternship
     * const createInternship = await prisma.createInternship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CreateInternshipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CreateInternship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipFindFirstArgs} args - Arguments to find a CreateInternship
     * @example
     * // Get one CreateInternship
     * const createInternship = await prisma.createInternship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CreateInternshipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipFindFirstArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CreateInternship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipFindFirstOrThrowArgs} args - Arguments to find a CreateInternship
     * @example
     * // Get one CreateInternship
     * const createInternship = await prisma.createInternship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CreateInternshipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CreateInternships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreateInternships
     * const createInternships = await prisma.createInternship.findMany()
     * 
     * // Get first 10 CreateInternships
     * const createInternships = await prisma.createInternship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const createInternshipWithIdOnly = await prisma.createInternship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CreateInternshipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CreateInternship.
     * @param {CreateInternshipCreateArgs} args - Arguments to create a CreateInternship.
     * @example
     * // Create one CreateInternship
     * const CreateInternship = await prisma.createInternship.create({
     *   data: {
     *     // ... data to create a CreateInternship
     *   }
     * })
     * 
    **/
    create<T extends CreateInternshipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CreateInternshipCreateArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CreateInternships.
     * @param {CreateInternshipCreateManyArgs} args - Arguments to create many CreateInternships.
     * @example
     * // Create many CreateInternships
     * const createInternship = await prisma.createInternship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CreateInternshipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreateInternships and returns the data saved in the database.
     * @param {CreateInternshipCreateManyAndReturnArgs} args - Arguments to create many CreateInternships.
     * @example
     * // Create many CreateInternships
     * const createInternship = await prisma.createInternship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreateInternships and only return the `id`
     * const createInternshipWithIdOnly = await prisma.createInternship.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CreateInternshipCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a CreateInternship.
     * @param {CreateInternshipDeleteArgs} args - Arguments to delete one CreateInternship.
     * @example
     * // Delete one CreateInternship
     * const CreateInternship = await prisma.createInternship.delete({
     *   where: {
     *     // ... filter to delete one CreateInternship
     *   }
     * })
     * 
    **/
    delete<T extends CreateInternshipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CreateInternshipDeleteArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CreateInternship.
     * @param {CreateInternshipUpdateArgs} args - Arguments to update one CreateInternship.
     * @example
     * // Update one CreateInternship
     * const createInternship = await prisma.createInternship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CreateInternshipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CreateInternshipUpdateArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CreateInternships.
     * @param {CreateInternshipDeleteManyArgs} args - Arguments to filter CreateInternships to delete.
     * @example
     * // Delete a few CreateInternships
     * const { count } = await prisma.createInternship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CreateInternshipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreateInternshipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreateInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreateInternships
     * const createInternship = await prisma.createInternship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CreateInternshipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CreateInternshipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreateInternship.
     * @param {CreateInternshipUpsertArgs} args - Arguments to update or create a CreateInternship.
     * @example
     * // Update or create a CreateInternship
     * const createInternship = await prisma.createInternship.upsert({
     *   create: {
     *     // ... data to create a CreateInternship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreateInternship we want to update
     *   }
     * })
    **/
    upsert<T extends CreateInternshipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CreateInternshipUpsertArgs<ExtArgs>>
    ): Prisma__CreateInternshipClient<$Result.GetResult<Prisma.$CreateInternshipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CreateInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipCountArgs} args - Arguments to filter CreateInternships to count.
     * @example
     * // Count the number of CreateInternships
     * const count = await prisma.createInternship.count({
     *   where: {
     *     // ... the filter for the CreateInternships we want to count
     *   }
     * })
    **/
    count<T extends CreateInternshipCountArgs>(
      args?: Subset<T, CreateInternshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreateInternshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreateInternship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreateInternshipAggregateArgs>(args: Subset<T, CreateInternshipAggregateArgs>): Prisma.PrismaPromise<GetCreateInternshipAggregateType<T>>

    /**
     * Group by CreateInternship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreateInternshipGroupByArgs} args - Group by arguments.
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
      T extends CreateInternshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreateInternshipGroupByArgs['orderBy'] }
        : { orderBy?: CreateInternshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreateInternshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreateInternshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreateInternship model
   */
  readonly fields: CreateInternshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreateInternship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreateInternshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CreateInternship model
   */ 
  interface CreateInternshipFieldRefs {
    readonly id: FieldRef<"CreateInternship", 'String'>
    readonly name: FieldRef<"CreateInternship", 'String'>
    readonly EducationLevel: FieldRef<"CreateInternship", 'String'>
    readonly InternshipDescription: FieldRef<"CreateInternship", 'String'>
    readonly InternshipRequirement: FieldRef<"CreateInternship", 'String'>
    readonly Paid: FieldRef<"CreateInternship", 'Boolean'>
    readonly AmountPaid: FieldRef<"CreateInternship", 'String'>
    readonly userId: FieldRef<"CreateInternship", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreateInternship findUnique
   */
  export type CreateInternshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * Filter, which CreateInternship to fetch.
     */
    where: CreateInternshipWhereUniqueInput
  }

  /**
   * CreateInternship findUniqueOrThrow
   */
  export type CreateInternshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * Filter, which CreateInternship to fetch.
     */
    where: CreateInternshipWhereUniqueInput
  }

  /**
   * CreateInternship findFirst
   */
  export type CreateInternshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * Filter, which CreateInternship to fetch.
     */
    where?: CreateInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreateInternships to fetch.
     */
    orderBy?: CreateInternshipOrderByWithRelationInput | CreateInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreateInternships.
     */
    cursor?: CreateInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreateInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreateInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreateInternships.
     */
    distinct?: CreateInternshipScalarFieldEnum | CreateInternshipScalarFieldEnum[]
  }

  /**
   * CreateInternship findFirstOrThrow
   */
  export type CreateInternshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * Filter, which CreateInternship to fetch.
     */
    where?: CreateInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreateInternships to fetch.
     */
    orderBy?: CreateInternshipOrderByWithRelationInput | CreateInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreateInternships.
     */
    cursor?: CreateInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreateInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreateInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreateInternships.
     */
    distinct?: CreateInternshipScalarFieldEnum | CreateInternshipScalarFieldEnum[]
  }

  /**
   * CreateInternship findMany
   */
  export type CreateInternshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * Filter, which CreateInternships to fetch.
     */
    where?: CreateInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreateInternships to fetch.
     */
    orderBy?: CreateInternshipOrderByWithRelationInput | CreateInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreateInternships.
     */
    cursor?: CreateInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreateInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreateInternships.
     */
    skip?: number
    distinct?: CreateInternshipScalarFieldEnum | CreateInternshipScalarFieldEnum[]
  }

  /**
   * CreateInternship create
   */
  export type CreateInternshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * The data needed to create a CreateInternship.
     */
    data: XOR<CreateInternshipCreateInput, CreateInternshipUncheckedCreateInput>
  }

  /**
   * CreateInternship createMany
   */
  export type CreateInternshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreateInternships.
     */
    data: CreateInternshipCreateManyInput | CreateInternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreateInternship createManyAndReturn
   */
  export type CreateInternshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * The data used to create many CreateInternships.
     */
    data: CreateInternshipCreateManyInput | CreateInternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreateInternship update
   */
  export type CreateInternshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * The data needed to update a CreateInternship.
     */
    data: XOR<CreateInternshipUpdateInput, CreateInternshipUncheckedUpdateInput>
    /**
     * Choose, which CreateInternship to update.
     */
    where: CreateInternshipWhereUniqueInput
  }

  /**
   * CreateInternship updateMany
   */
  export type CreateInternshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreateInternships.
     */
    data: XOR<CreateInternshipUpdateManyMutationInput, CreateInternshipUncheckedUpdateManyInput>
    /**
     * Filter which CreateInternships to update
     */
    where?: CreateInternshipWhereInput
  }

  /**
   * CreateInternship upsert
   */
  export type CreateInternshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * The filter to search for the CreateInternship to update in case it exists.
     */
    where: CreateInternshipWhereUniqueInput
    /**
     * In case the CreateInternship found by the `where` argument doesn't exist, create a new CreateInternship with this data.
     */
    create: XOR<CreateInternshipCreateInput, CreateInternshipUncheckedCreateInput>
    /**
     * In case the CreateInternship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreateInternshipUpdateInput, CreateInternshipUncheckedUpdateInput>
  }

  /**
   * CreateInternship delete
   */
  export type CreateInternshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
    /**
     * Filter which CreateInternship to delete.
     */
    where: CreateInternshipWhereUniqueInput
  }

  /**
   * CreateInternship deleteMany
   */
  export type CreateInternshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreateInternships to delete
     */
    where?: CreateInternshipWhereInput
  }

  /**
   * CreateInternship without action
   */
  export type CreateInternshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreateInternship
     */
    select?: CreateInternshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreateInternshipInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    CompanyDescription: 'CompanyDescription',
    CompanyImageUrl: 'CompanyImageUrl'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CreateInternshipScalarFieldEnum: {
    id: 'id',
    name: 'name',
    EducationLevel: 'EducationLevel',
    InternshipDescription: 'InternshipDescription',
    InternshipRequirement: 'InternshipRequirement',
    Paid: 'Paid',
    AmountPaid: 'AmountPaid',
    userId: 'userId'
  };

  export type CreateInternshipScalarFieldEnum = (typeof CreateInternshipScalarFieldEnum)[keyof typeof CreateInternshipScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    userId?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    CompanyDescription?: StringNullableFilter<"Company"> | string | null
    CompanyImageUrl?: StringNullableFilter<"Company"> | string | null
    projects?: CreateInternshipListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    CompanyDescription?: SortOrderInput | SortOrder
    CompanyImageUrl?: SortOrderInput | SortOrder
    projects?: CreateInternshipOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    CompanyDescription?: StringNullableFilter<"Company"> | string | null
    CompanyImageUrl?: StringNullableFilter<"Company"> | string | null
    projects?: CreateInternshipListRelationFilter
  }, "id" | "userId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    CompanyDescription?: SortOrderInput | SortOrder
    CompanyImageUrl?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    userId?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    CompanyDescription?: StringNullableWithAggregatesFilter<"Company"> | string | null
    CompanyImageUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type CreateInternshipWhereInput = {
    AND?: CreateInternshipWhereInput | CreateInternshipWhereInput[]
    OR?: CreateInternshipWhereInput[]
    NOT?: CreateInternshipWhereInput | CreateInternshipWhereInput[]
    id?: StringFilter<"CreateInternship"> | string
    name?: StringFilter<"CreateInternship"> | string
    EducationLevel?: StringNullableFilter<"CreateInternship"> | string | null
    InternshipDescription?: StringNullableFilter<"CreateInternship"> | string | null
    InternshipRequirement?: StringNullableFilter<"CreateInternship"> | string | null
    Paid?: BoolFilter<"CreateInternship"> | boolean
    AmountPaid?: StringNullableFilter<"CreateInternship"> | string | null
    userId?: StringFilter<"CreateInternship"> | string
    user?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type CreateInternshipOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    EducationLevel?: SortOrderInput | SortOrder
    InternshipDescription?: SortOrderInput | SortOrder
    InternshipRequirement?: SortOrderInput | SortOrder
    Paid?: SortOrder
    AmountPaid?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: CompanyOrderByWithRelationInput
  }

  export type CreateInternshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreateInternshipWhereInput | CreateInternshipWhereInput[]
    OR?: CreateInternshipWhereInput[]
    NOT?: CreateInternshipWhereInput | CreateInternshipWhereInput[]
    name?: StringFilter<"CreateInternship"> | string
    EducationLevel?: StringNullableFilter<"CreateInternship"> | string | null
    InternshipDescription?: StringNullableFilter<"CreateInternship"> | string | null
    InternshipRequirement?: StringNullableFilter<"CreateInternship"> | string | null
    Paid?: BoolFilter<"CreateInternship"> | boolean
    AmountPaid?: StringNullableFilter<"CreateInternship"> | string | null
    userId?: StringFilter<"CreateInternship"> | string
    user?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type CreateInternshipOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    EducationLevel?: SortOrderInput | SortOrder
    InternshipDescription?: SortOrderInput | SortOrder
    InternshipRequirement?: SortOrderInput | SortOrder
    Paid?: SortOrder
    AmountPaid?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: CreateInternshipCountOrderByAggregateInput
    _max?: CreateInternshipMaxOrderByAggregateInput
    _min?: CreateInternshipMinOrderByAggregateInput
  }

  export type CreateInternshipScalarWhereWithAggregatesInput = {
    AND?: CreateInternshipScalarWhereWithAggregatesInput | CreateInternshipScalarWhereWithAggregatesInput[]
    OR?: CreateInternshipScalarWhereWithAggregatesInput[]
    NOT?: CreateInternshipScalarWhereWithAggregatesInput | CreateInternshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreateInternship"> | string
    name?: StringWithAggregatesFilter<"CreateInternship"> | string
    EducationLevel?: StringNullableWithAggregatesFilter<"CreateInternship"> | string | null
    InternshipDescription?: StringNullableWithAggregatesFilter<"CreateInternship"> | string | null
    InternshipRequirement?: StringNullableWithAggregatesFilter<"CreateInternship"> | string | null
    Paid?: BoolWithAggregatesFilter<"CreateInternship"> | boolean
    AmountPaid?: StringNullableWithAggregatesFilter<"CreateInternship"> | string | null
    userId?: StringWithAggregatesFilter<"CreateInternship"> | string
  }

  export type CompanyCreateInput = {
    id?: string
    userId: string
    name: string
    CompanyDescription?: string | null
    CompanyImageUrl?: string | null
    projects?: CreateInternshipCreateNestedManyWithoutUserInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    CompanyDescription?: string | null
    CompanyImageUrl?: string | null
    projects?: CreateInternshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: CreateInternshipUpdateManyWithoutUserNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: CreateInternshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    userId: string
    name: string
    CompanyDescription?: string | null
    CompanyImageUrl?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreateInternshipCreateInput = {
    id?: string
    name: string
    EducationLevel?: string | null
    InternshipDescription?: string | null
    InternshipRequirement?: string | null
    Paid: boolean
    AmountPaid?: string | null
    user: CompanyCreateNestedOneWithoutProjectsInput
  }

  export type CreateInternshipUncheckedCreateInput = {
    id?: string
    name: string
    EducationLevel?: string | null
    InternshipDescription?: string | null
    InternshipRequirement?: string | null
    Paid: boolean
    AmountPaid?: string | null
    userId: string
  }

  export type CreateInternshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
    user?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type CreateInternshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreateInternshipCreateManyInput = {
    id?: string
    name: string
    EducationLevel?: string | null
    InternshipDescription?: string | null
    InternshipRequirement?: string | null
    Paid: boolean
    AmountPaid?: string | null
    userId: string
  }

  export type CreateInternshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreateInternshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CreateInternshipListRelationFilter = {
    every?: CreateInternshipWhereInput
    some?: CreateInternshipWhereInput
    none?: CreateInternshipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CreateInternshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    CompanyDescription?: SortOrder
    CompanyImageUrl?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    CompanyDescription?: SortOrder
    CompanyImageUrl?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    CompanyDescription?: SortOrder
    CompanyImageUrl?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CreateInternshipCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    EducationLevel?: SortOrder
    InternshipDescription?: SortOrder
    InternshipRequirement?: SortOrder
    Paid?: SortOrder
    AmountPaid?: SortOrder
    userId?: SortOrder
  }

  export type CreateInternshipMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    EducationLevel?: SortOrder
    InternshipDescription?: SortOrder
    InternshipRequirement?: SortOrder
    Paid?: SortOrder
    AmountPaid?: SortOrder
    userId?: SortOrder
  }

  export type CreateInternshipMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    EducationLevel?: SortOrder
    InternshipDescription?: SortOrder
    InternshipRequirement?: SortOrder
    Paid?: SortOrder
    AmountPaid?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CreateInternshipCreateNestedManyWithoutUserInput = {
    create?: XOR<CreateInternshipCreateWithoutUserInput, CreateInternshipUncheckedCreateWithoutUserInput> | CreateInternshipCreateWithoutUserInput[] | CreateInternshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreateInternshipCreateOrConnectWithoutUserInput | CreateInternshipCreateOrConnectWithoutUserInput[]
    createMany?: CreateInternshipCreateManyUserInputEnvelope
    connect?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
  }

  export type CreateInternshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreateInternshipCreateWithoutUserInput, CreateInternshipUncheckedCreateWithoutUserInput> | CreateInternshipCreateWithoutUserInput[] | CreateInternshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreateInternshipCreateOrConnectWithoutUserInput | CreateInternshipCreateOrConnectWithoutUserInput[]
    createMany?: CreateInternshipCreateManyUserInputEnvelope
    connect?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CreateInternshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreateInternshipCreateWithoutUserInput, CreateInternshipUncheckedCreateWithoutUserInput> | CreateInternshipCreateWithoutUserInput[] | CreateInternshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreateInternshipCreateOrConnectWithoutUserInput | CreateInternshipCreateOrConnectWithoutUserInput[]
    upsert?: CreateInternshipUpsertWithWhereUniqueWithoutUserInput | CreateInternshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreateInternshipCreateManyUserInputEnvelope
    set?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    disconnect?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    delete?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    connect?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    update?: CreateInternshipUpdateWithWhereUniqueWithoutUserInput | CreateInternshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreateInternshipUpdateManyWithWhereWithoutUserInput | CreateInternshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreateInternshipScalarWhereInput | CreateInternshipScalarWhereInput[]
  }

  export type CreateInternshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreateInternshipCreateWithoutUserInput, CreateInternshipUncheckedCreateWithoutUserInput> | CreateInternshipCreateWithoutUserInput[] | CreateInternshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreateInternshipCreateOrConnectWithoutUserInput | CreateInternshipCreateOrConnectWithoutUserInput[]
    upsert?: CreateInternshipUpsertWithWhereUniqueWithoutUserInput | CreateInternshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreateInternshipCreateManyUserInputEnvelope
    set?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    disconnect?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    delete?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    connect?: CreateInternshipWhereUniqueInput | CreateInternshipWhereUniqueInput[]
    update?: CreateInternshipUpdateWithWhereUniqueWithoutUserInput | CreateInternshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreateInternshipUpdateManyWithWhereWithoutUserInput | CreateInternshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreateInternshipScalarWhereInput | CreateInternshipScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    upsert?: CompanyUpsertWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProjectsInput, CompanyUpdateWithoutProjectsInput>, CompanyUncheckedUpdateWithoutProjectsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CreateInternshipCreateWithoutUserInput = {
    id?: string
    name: string
    EducationLevel?: string | null
    InternshipDescription?: string | null
    InternshipRequirement?: string | null
    Paid: boolean
    AmountPaid?: string | null
  }

  export type CreateInternshipUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    EducationLevel?: string | null
    InternshipDescription?: string | null
    InternshipRequirement?: string | null
    Paid: boolean
    AmountPaid?: string | null
  }

  export type CreateInternshipCreateOrConnectWithoutUserInput = {
    where: CreateInternshipWhereUniqueInput
    create: XOR<CreateInternshipCreateWithoutUserInput, CreateInternshipUncheckedCreateWithoutUserInput>
  }

  export type CreateInternshipCreateManyUserInputEnvelope = {
    data: CreateInternshipCreateManyUserInput | CreateInternshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreateInternshipUpsertWithWhereUniqueWithoutUserInput = {
    where: CreateInternshipWhereUniqueInput
    update: XOR<CreateInternshipUpdateWithoutUserInput, CreateInternshipUncheckedUpdateWithoutUserInput>
    create: XOR<CreateInternshipCreateWithoutUserInput, CreateInternshipUncheckedCreateWithoutUserInput>
  }

  export type CreateInternshipUpdateWithWhereUniqueWithoutUserInput = {
    where: CreateInternshipWhereUniqueInput
    data: XOR<CreateInternshipUpdateWithoutUserInput, CreateInternshipUncheckedUpdateWithoutUserInput>
  }

  export type CreateInternshipUpdateManyWithWhereWithoutUserInput = {
    where: CreateInternshipScalarWhereInput
    data: XOR<CreateInternshipUpdateManyMutationInput, CreateInternshipUncheckedUpdateManyWithoutUserInput>
  }

  export type CreateInternshipScalarWhereInput = {
    AND?: CreateInternshipScalarWhereInput | CreateInternshipScalarWhereInput[]
    OR?: CreateInternshipScalarWhereInput[]
    NOT?: CreateInternshipScalarWhereInput | CreateInternshipScalarWhereInput[]
    id?: StringFilter<"CreateInternship"> | string
    name?: StringFilter<"CreateInternship"> | string
    EducationLevel?: StringNullableFilter<"CreateInternship"> | string | null
    InternshipDescription?: StringNullableFilter<"CreateInternship"> | string | null
    InternshipRequirement?: StringNullableFilter<"CreateInternship"> | string | null
    Paid?: BoolFilter<"CreateInternship"> | boolean
    AmountPaid?: StringNullableFilter<"CreateInternship"> | string | null
    userId?: StringFilter<"CreateInternship"> | string
  }

  export type CompanyCreateWithoutProjectsInput = {
    id?: string
    userId: string
    name: string
    CompanyDescription?: string | null
    CompanyImageUrl?: string | null
  }

  export type CompanyUncheckedCreateWithoutProjectsInput = {
    id?: string
    userId: string
    name: string
    CompanyDescription?: string | null
    CompanyImageUrl?: string | null
  }

  export type CompanyCreateOrConnectWithoutProjectsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
  }

  export type CompanyUpsertWithoutProjectsInput = {
    update: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type CompanyUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreateInternshipCreateManyUserInput = {
    id?: string
    name: string
    EducationLevel?: string | null
    InternshipDescription?: string | null
    InternshipRequirement?: string | null
    Paid: boolean
    AmountPaid?: string | null
  }

  export type CreateInternshipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreateInternshipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreateInternshipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    EducationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipDescription?: NullableStringFieldUpdateOperationsInput | string | null
    InternshipRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    AmountPaid?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreateInternshipDefaultArgs instead
     */
    export type CreateInternshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreateInternshipDefaultArgs<ExtArgs>

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