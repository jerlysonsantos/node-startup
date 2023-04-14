import { Response, Request } from "express";

import { GenericService } from "./generic.service";

import { Get, Post } from "../../lib/routers/handlers.decorator";
import { Controller } from "../../lib/routers/controller.decorator";
import { Inject } from "../../lib/dependency-injection/inject.decorator";

@Controller("/")
class GenericController {
  @Inject("genericService")
  private genericService: GenericService;
}

export { GenericController };
