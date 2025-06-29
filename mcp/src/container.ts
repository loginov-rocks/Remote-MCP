import { OAUTH_API_BASE_URL } from './constants';

import { McpSseController } from './controllers/McpSseController';
import { OAuthController } from './controllers/OAuthController';

import { McpServer } from './mcp/McpServer';

import { McpSseAuthMiddleware } from './middlewares/McpSseAuthMiddleware';

import { ArmyService } from './services/ArmyService';
import { StudentService } from './services/StudentService';
import { TokenService } from './services/TokenService';

const armyService = new ArmyService();

const studentService = new StudentService();

const tokenService = new TokenService({
  studentService,
});

const mcpServer = new McpServer({
  armyService,
  studentService,
});

export const mcpSseAuthMiddleware = new McpSseAuthMiddleware({
  tokenService,
});

export const mcpSseController = new McpSseController({
  mcpServer,
})

export const oauthController = new OAuthController({
  oauthApiBaseUrl: OAUTH_API_BASE_URL,
});
