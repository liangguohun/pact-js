import { Interaction } from './interaction';

export type PactfileWriteMode = "overwrite" | "update" | "none";

export class MockService {
  constructor(
    consumer: string,
    provider: string,
    port?: number,
    host?: string,
    ssl?: boolean,
    pactfileWriteMode?: PactfileWriteMode,
  );
  addInteraction(interaction: Interaction): Promise<string>;
  addInteraction(interaction: Interaction, consumer?:string, provider?:string): void;
  removeInteractions(): Promise<string>;
  verify(): Promise<string>;
  writePact(): Promise<string>;
}
