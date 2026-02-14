/**
 * Borg Pattern - Creational
 * 
 * Source: app/py/101/py-patterns/patterns/creational/borg.py
 * 
 * What is this pattern about?
 * A singleton with shared-state among instances.
 * All instances share the same state.
 * 
 * Where is the pattern used practically?
 * When you want all instances to share the same state.
 * 
 * TL;DR
 * A singleton with shared-state among instances.
 */

/**
 * Redis Connection Pool using Borg pattern
 * All instances share the same Redis client connection
 */
class RedisPool {
    constructor() {
        if (!RedisPool.instance) {
            this._sharedState = {
                client: null,
                connected: false,
                config: {}
            };
            RedisPool.instance = this;
        }
        // All instances share the same state
        this._sharedState = RedisPool.instance._sharedState;
    }

    /**
     * Get the shared client instance
     */
    getClient() {
        return this._sharedState.client;
    }

    /**
     * Check if connected
     */
    isConnected() {
        return this._sharedState.connected;
    }

    /**
     * Get connection configuration
     */
    getConfig() {
        return { ...this._sharedState.config };
    }

    /**
     * Set shared state
     */
    _setState(state) {
        Object.assign(this._sharedState, state);
    }
}

/**
 * Application Configuration using Borg pattern
 * All parts of the app share the same config
 */
class AppConfig {
    constructor() {
        if (!AppConfig.instance) {
            this._sharedState = {
                env: process.env.NODE_ENV || 'development',
                port: parseInt(process.env.PORT) || 3000,
                debug: process.env.DEBUG === 'true',
                redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
                databaseUrl: process.env.DATABASE_URL || 'sqlite://:memory:'
            };
            AppConfig.instance = this;
        }
        this._sharedState = AppConfig.instance._sharedState;
    }

    get(key) {
        return this._sharedState[key];
    }

    set(key, value) {
        this._sharedState[key] = value;
    }

    getAll() {
        return { ...this._sharedState };
    }
}

/**
 * Service Registry using Borg pattern
 * All services are registered and accessible globally
 */
class ServiceRegistry {
    constructor() {
        if (!ServiceRegistry.instance) {
            this._sharedState = {
                services: new Map(),
                singletons: new Map()
            };
            ServiceRegistry.instance = this;
        }
        this._sharedState = ServiceRegistry.instance._sharedState;
    }

    /**
     * Register a service
     * @param {string} name - Service name
     * @param {*} service - Service instance
     * @param {boolean} singleton - Whether to use singleton
     */
    register(name, service, singleton = true) {
        if (singleton) {
            this._sharedState.singletons.set(name, service);
        } else {
            this._sharedState.services.set(name, () => service);
        }
    }

    /**
     * Get a service
     * @param {string} name - Service name
     * @returns {*} Service instance
     */
    get(name) {
        if (this._sharedState.singletons.has(name)) {
            return this._sharedState.singletons.get(name);
        }
        if (this._sharedState.services.has(name)) {
            return this._sharedState.services.get(name)();
        }
        return null;
    }
}

// Export
module.exports = {
    RedisPool,
    AppConfig,
    ServiceRegistry
};
