import { InjectionToken } from "@angular/core";
import { Logger } from "../types";

export const LOGGER_TOKEN = new InjectionToken<Logger>('LOGGER_TOKEN');