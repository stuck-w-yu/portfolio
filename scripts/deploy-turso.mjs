import { createClient } from '@libsql/client';
import fs from 'fs';
import path from 'path';

// Load env vars if not loaded (or rely on process.env being populated by running with --env-file or similar if using node 20+)
// Since we are running via npx tsx or similar, we might need dotenv, OR just expect environment to be set.
// We will hardcode reading .env for simplicity if needed, but let's assume we run with `node --env-file=.env` (Node 20+) or just parse locally.

const envFile = fs.readFileSync('.env', 'utf-8');
const envMatch = envFile.match(/^TURSO_DATABASE_URL=["']?([^"'\n]+)["']?/m);
const tursoUrl = envMatch ? envMatch[1] : process.env.TURSO_DATABASE_URL;

if (!tursoUrl) {
    console.error("TURSO_DATABASE_URL not found");
    process.exit(1);
}

const client = createClient({
    url: tursoUrl,
});

async function main() {
    const sqlContent = fs.readFileSync('migration.sql', 'utf-8');

    // Remove comments
    const cleanedSql = sqlContent.replace(/--.*$/gm, '');

    // Split by semicolon
    const statements = cleanedSql.split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    console.log(`Found ${statements.length} statements.`);

    for (const stmt of statements) {
        console.log("Executing:", stmt.substring(0, 50) + "...");
        try {
            await client.execute(stmt);
        } catch (e) {
            console.error("Failed to execute statement:", stmt);
            console.error(e);
            process.exit(1);
        }
    }
    console.log("Schema deployed successfully!");
}

main();
