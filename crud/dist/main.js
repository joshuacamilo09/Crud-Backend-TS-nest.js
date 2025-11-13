"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const users_module_1 = require("./users.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(users_module_1.UsersModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('User API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map