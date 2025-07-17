import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    e2e: {
        specPattern: '**/*.feature',
        setupNodeEvents,
        baseUrl: 'https://ci-smoke-wa.test.smartgovcommunity.com',
        supportFile: false,
        testIsolation: true,
        experimentalRunAllSpecs: false,
        video: true,
        defaultCommandTimeout: 10000,
        requestTimeout: 10000,
        responseTimeout: 30000,
        retries: {
            runMode: 2,
            openMode: 0,
        },
        viewportWidth: 1920,
        viewportHeight: 1080,
        env: {
            // Add any environment variables you need here
        },
    },
})