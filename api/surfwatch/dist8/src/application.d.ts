import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import { juggler } from '@loopback/repository';
declare const SurfwatchApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("../node_modules/@loopback/boot/dist8/src/interfaces").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("../node_modules/@loopback/context/dist8/src/value-promise").Constructor<import("../node_modules/@loopback/boot/dist8/src/interfaces").Booter>[]): import("../node_modules/@loopback/context/dist8/src/binding").Binding<any>[];
    component(component: import("../node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
    mountComponentBooters(component: import("../node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    repository(repo: import("../node_modules/@loopback/repository/dist8/src/common-types").Class<import("../node_modules/@loopback/repository/dist8/src/repositories/repository").Repository<any>>): void;
    getRepository<R extends import("../node_modules/@loopback/repository/dist8/src/repositories/repository").Repository<any>>(repo: import("../node_modules/@loopback/repository/dist8/src/common-types").Class<R>): Promise<R>;
    dataSource(dataSource: juggler.DataSource, name?: string | undefined): void;
    component(component: import("../node_modules/@loopback/repository/dist8/src/common-types").Class<{}>): void;
    mountComponentRepository(component: import("../node_modules/@loopback/repository/dist8/src/common-types").Class<{}>): void;
}) & typeof RestApplication;
export declare class SurfwatchApplication extends SurfwatchApplication_base {
    constructor(options?: ApplicationConfig);
    setupDatasources(): void;
    start(): Promise<void>;
}
export {};
