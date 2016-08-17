﻿/**
 * Configuration parameters
 */

module.exports = {
    // System settings:
    system: {
        // Where the API Web services run
        hostname: "0.0.0.0",
        // What port is used for listening
        port: 3000 
    },
    // Auth settings for JWT
    auth: {
        // The Web token HMAC's key 
        secret: 'DaMi1FMq',
        // The Web token expiration time in seconds
        expiresIn: 60 * 60 * 24 * 30
    },
    // DB settings:
    db: {
        // PostgreSQL DB instance    
        connectionString: "postgres://emocdxkv:WlyKU8WgQxqe7EZCpZB89SDX5_wAvh3L@horton.elephantsql.com:5432/emocdxkv",
        // The size of the db connection pool
        poolSize: 0 
        // poolSize: 2 // for reliable connection to DB
    },
}