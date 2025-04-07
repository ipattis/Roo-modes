#!/usr/bin/env node

/**
 * Perplexity AI MCP Integration Test Suite
 * This script runs comprehensive tests to verify Perplexity API connectivity and MCP integration.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import os from 'os';
import { spawn } from 'child_process';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import https from 'https';

// Configuration paths
const HOME_DIR = os.homedir();
const MCP_SERVER_PATH = path.join(HOME_DIR, 'Documents/Cline/MCP/perplexity-ai/build/index.js');
const CLINE_SETTINGS_PATH = path.join(HOME_DIR, 'Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json');
const ROO_SETTINGS_PATH = path.join(HOME_DIR, 'Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json');

// Test control flags - enable/disable specific tests
const RUN_DIRECT_API_TESTS = true;
const RUN_MCP_INTEGRATION_TESTS = true;
const CHECK_CONFIGURATION = true;

async function main() {
  console.log('🔍 Perplexity AI MCP Integration Test Suite');
  console.log('==========================================');
  
  let apiKey = null;
  
  // Configuration Check
  if (CHECK_CONFIGURATION) {
    console.log('\n📋 CONFIGURATION CHECK');
    console.log('---------------------');
    
    // Check if server file exists
    if (fs.existsSync(MCP_SERVER_PATH)) {
      console.log(`✅ Server file exists at: ${MCP_SERVER_PATH}`);
    } else {
      console.log(`❌ Server file not found at: ${MCP_SERVER_PATH}`);
      console.log('   - Make sure you have installed the perplexity-ai MCP provider');
      console.log('   - Run: cline mcp providers install perplexity-ai');
    }
    
    // Check Cline MCP settings
    console.log('\n🔑 Checking API key in settings files...');
    
    // Check Claude Cline settings
    if (fs.existsSync(CLINE_SETTINGS_PATH)) {
      try {
        const settings = JSON.parse(fs.readFileSync(CLINE_SETTINGS_PATH, 'utf8'));
        if (settings?.mcpServers?.['perplexity-ai']?.env?.PERPLEXITY_API_KEY) {
          apiKey = settings.mcpServers['perplexity-ai'].env.PERPLEXITY_API_KEY;
          console.log('✅ Found API key in Claude Cline MCP settings');
          
          // Display first and last 4 characters of the API key for verification
          const firstFour = apiKey.substring(0, 5);
          const lastFour = apiKey.substring(apiKey.length - 4);
          console.log(`🔑 API Key format: ${firstFour}...${lastFour}`);
          
          if (settings.mcpServers['perplexity-ai'].disabled === true) {
            console.log('⚠️ perplexity-ai server is DISABLED in Claude Cline settings');
          } else {
            console.log('✅ perplexity-ai server is ENABLED in Claude Cline settings');
          }
        } else {
          console.log('❌ API key not found in Claude Cline MCP settings');
        }
      } catch (err) {
        console.log(`❌ Error parsing Claude Cline MCP settings: ${err.message}`);
      }
    } else {
      console.log(`ℹ️ Claude Cline settings file not found at: ${CLINE_SETTINGS_PATH}`);
    }
    
    // Check Roo Cline settings
    if (fs.existsSync(ROO_SETTINGS_PATH)) {
      try {
        const settings = JSON.parse(fs.readFileSync(ROO_SETTINGS_PATH, 'utf8'));
        if (settings?.mcpServers?.['perplexity-ai']?.env?.PERPLEXITY_API_KEY) {
          if (!apiKey) {
            apiKey = settings.mcpServers['perplexity-ai'].env.PERPLEXITY_API_KEY;
            // Display first and last 4 characters of the API key for verification
            const firstFour = apiKey.substring(0, 5);
            const lastFour = apiKey.substring(apiKey.length - 4);
            console.log(`🔑 API Key format: ${firstFour}...${lastFour}`);
          }
          console.log('✅ Found API key in Roo Cline MCP settings');
          
          if (settings.mcpServers['perplexity-ai'].disabled === true) {
            console.log('⚠️ perplexity-ai server is DISABLED in Roo Cline settings');
          } else {
            console.log('✅ perplexity-ai server is ENABLED in Roo Cline settings');
          }
        } else {
          console.log('❌ API key not found in Roo Cline MCP settings');
        }
      } catch (err) {
        console.log(`❌ Error parsing Roo Cline MCP settings: ${err.message}`);
      }
    } else {
      console.log(`ℹ️ Roo Cline settings file not found at: ${ROO_SETTINGS_PATH}`);
    }
    
    if (!apiKey) {
      console.log('❌ No API key found in any settings file. Direct API tests will be skipped.');
      if (RUN_DIRECT_API_TESTS) {
        console.log('ℹ️ Setting RUN_DIRECT_API_TESTS to false due to missing API key.');
      }
    }
  }
  
  // Direct API Tests
  if (RUN_DIRECT_API_TESTS && apiKey) {
    console.log('\n📋 DIRECT API TESTS');
    console.log('------------------');
    
    // Test chat completions endpoint with sonar-deep-research
    console.log('\nTesting chat completions endpoint with sonar-deep-research...');
    const chatData = JSON.stringify({
      model: "sonar-deep-research",
      messages: [
        { role: "user", content: "Hello, what is your name?" }
      ]
    });
    
    await makeRequest(
      'api.perplexity.ai', 
      '/chat/completions', 
      'POST', 
      chatData, 
      apiKey, 
      'Chat Completions (sonar-deep-research)'
    );
    
    // Test chat completions with sonar-reasoning
    console.log('\nTesting chat completions endpoint with sonar-reasoning...');
    const chatData2 = JSON.stringify({
      model: "sonar-reasoning",
      messages: [
        { role: "user", content: "Hello, what is your name?" }
      ]
    });
    
    await makeRequest(
      'api.perplexity.ai', 
      '/chat/completions', 
      'POST', 
      chatData2, 
      apiKey, 
      'Chat Completions (sonar-reasoning)'
    );
    
    // Test search endpoint
    console.log('\nTesting search endpoint...');
    const searchData = JSON.stringify({
      query: "What is Model Context Protocol?",
      num_results: 1
    });
    
    await makeRequest(
      'api.perplexity.ai', 
      '/search', 
      'POST', 
      searchData, 
      apiKey, 
      'Search'
    );
  }
  
  // MCP Integration Tests
  if (RUN_MCP_INTEGRATION_TESTS) {
    console.log('\n📋 MCP INTEGRATION TESTS');
    console.log('----------------------');
    
    if (!fs.existsSync(MCP_SERVER_PATH)) {
      console.log(`❌ Server file not found at: ${MCP_SERVER_PATH}`);
      console.log('   Skipping MCP integration tests.');
      return;
    }
    
    console.log('📡 Starting server process...');
    const serverProcess = spawn('node', [MCP_SERVER_PATH], {
      env: { ...process.env, PERPLEXITY_API_KEY: apiKey },
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    // Log server output for debugging
    serverProcess.stdout.on('data', (data) => {
      console.log(`📤 Server stdout: ${data}`);
    });
    
    serverProcess.stderr.on('data', (data) => {
      console.log(`📤 Server stderr: ${data}`);
    });
    
    // Wait for server to initialize
    console.log('⏱️ Waiting for server to initialize (2 seconds)...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Try to connect to the server
    console.log('🔌 Attempting to connect to MCP server...');
    try {
      const transport = new StdioClientTransport({
        stdin: serverProcess.stdin,
        stdout: serverProcess.stdout,
      });
      
      // Create client with options
      const client = new Client(transport, {
        messageTimeout: 10000,
      });
      
      console.log('⏳ Connecting...');
      await client.connect();
      console.log('✅ Connected to MCP server!');
      
      // List available tools
      console.log('🧰 Listing available tools...');
      const tools = await client.listTools();
      console.log('Available tools:', JSON.stringify(tools, null, 2));
      
      // Try a simple search query
      console.log('🔎 Testing search tool...');
      try {
        const result = await client.callTool('search', {
          query: 'What is Model Context Protocol?',
          num_results: 1
        });
        console.log('Search result:', JSON.stringify(result, null, 2));
        console.log('✅ Search test successful!');
      } catch (error) {
        console.error('❌ Search test failed:', error);
        if (error.message && error.message.includes('401')) {
          console.error('🔑 API key authentication error. Check your Perplexity API key or subscription plan.');
        }
      }
      
      // Try to use the ask tool
      console.log('💬 Testing ask tool...');
      try {
        const result = await client.callTool('ask', {
          query: 'What is Model Context Protocol in simple terms?',
          model: 'sonar-reasoning'
        });
        console.log('Ask result:', JSON.stringify(result, null, 2));
        console.log('✅ Ask test successful!');
      } catch (error) {
        console.error('❌ Ask test failed:', error);
        if (error.message && error.message.includes('401')) {
          console.error('🔑 API key authentication error. Check your Perplexity API key or subscription plan.');
        }
      }
      
      // Cleanup
      await client.disconnect();
    } catch (error) {
      console.error('❌ Connection failed:', error);
    } finally {
      console.log('🛑 Terminating server process...');
      serverProcess.kill();
      console.log('✅ Server process terminated');
    }
  }
  
  // Provide troubleshooting steps
  console.log('\n🔧 TROUBLESHOOTING STEPS:');
  console.log('1. Ensure your Perplexity API key is valid and correctly set');
  console.log('   - Get a key from: https://www.perplexity.ai/settings/api');
  console.log('2. Check your Perplexity API subscription plan');
  console.log('   - Some features may require a paid plan');
  console.log('   - See https://www.perplexity.ai/pricing for details');
  console.log('3. Make sure the MCP server file path is correct');
  console.log('4. Try restarting VS Code to apply configuration changes');
  console.log('5. Check VS Code logs for any MCP connection errors');
  console.log('6. For more details, see perplexity-models.md');
  
  console.log('\n==========================================');
  console.log('Test suite completed. Use the information above to troubleshoot your Perplexity AI MCP setup.');
}

// Helper function to make HTTP requests
function makeRequest(host, path, method, data, apiKey, testName) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: host,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(data)
      }
    };
    
    const req = https.request(options, (res) => {
      console.log(`🔄 ${testName} Status Code: ${res.statusCode}`);
      
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ ${testName} test successful!`);
          try {
            const parsedData = JSON.parse(responseData);
            console.log(`Response type: ${typeof parsedData}`);
            console.log(`Response has error: ${parsedData.error ? 'Yes' : 'No'}`);
            if (parsedData.error) {
              console.log(`Error message: ${parsedData.error.message}`);
            }
          } catch (e) {
            console.log(`Could not parse response: ${e.message}`);
          }
        } else {
          console.log(`❌ ${testName} test failed with status ${res.statusCode}`);
          try {
            const errorData = JSON.parse(responseData);
            console.log('Error details:', JSON.stringify(errorData, null, 2));
          } catch (e) {
            console.log('Error response:', responseData);
          }
        }
        resolve();
      });
    });
    
    req.on('error', (error) => {
      console.error(`❌ ${testName} request error:`, error);
      reject(error);
    });
    
    req.write(data);
    req.end();
  });
}

// Proper error handling
main().catch(error => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});