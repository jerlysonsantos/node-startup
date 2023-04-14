import { Response, Request } from "express";

import { GenericRepository } from "./repository/generic.repository";
import { Injectable } from "../../lib/dependency-injection/injectable.decorator";
import { Inject } from "../../lib/dependency-injection/inject.decorator";

@Injectable("genericService")
class GenericService {
  @Inject("genericRepository")
  genericRepository: GenericRepository;

  constructor() {}
}

export { GenericService };
