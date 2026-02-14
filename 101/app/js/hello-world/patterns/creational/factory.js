/**
 * Factory Pattern - Creational
 * 
 * Source: app/py/101/py-patterns/patterns/creational/factory.py
 * 
 * What is this pattern about?
 * Delegates instantiation to a specialized function/method.
 * 
 * Where is the pattern used practically?
 * Used when class instantiation needs to be abstracted based on type.
 * 
 * TL;DR
 * Delegate a specialized function/method to create instances.
 */

class CacheService {
    constructor(options = {}) {
        this.type = 'cache';
        this.ttl = options.ttl || 60;
    }

    async get(key) {
        // Implementation in main app
        return null;
    }

    async set(key, value) {
        // Implementation in main app
    }
}

class DatabaseService {
    constructor(options = {}) {
        this.type = 'database';
        this.url = options.url || 'sqlite://:memory:';
    }

    async query(sql) {
        // Implementation in main app
        return [];
    }

    async connect() {
        // Implementation in main app
    }
}

class AnalyticsService {
    constructor(options = {}) {
        this.type = 'analytics';
        this.provider = options.provider || 'pandas';
    }

    async process(data) {
        // Implementation in main app
        return {};
    }
}

/**
 * Service Factory - Creates services based on type
 */
class ServiceFactory {
    /**
     * Create a service instance based on type
     * @param {string} serviceType - Type of service to create
     * @param {Object} options - Service configuration options
     * @returns {Service} Service instance
     */
    static createService(serviceType, options = {}) {
        const services = {
            'cache': () => new CacheService(options),
            'database': () => new DatabaseService(options),
            'analytics': () => new AnalyticsService(options)
        };

        if (!services[serviceType]) {
            throw new Error(`Unknown service type: ${serviceType}`);
        }

        return services[serviceType]();
    }

    /**
     * Register a new service type
     * @param {string} serviceType - Type identifier
     * @param {Function} creator - Factory function
     */
    static registerService(serviceType, creator) {
        ServiceFactory.services[serviceType] = creator;
    }
}

// Export for use in main application
module.exports = {
    ServiceFactory,
    CacheService,
    DatabaseService,
    AnalyticsService
};
