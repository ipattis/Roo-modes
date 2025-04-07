# Perplexity AI Models for MCP Integration

This document outlines the supported Perplexity AI models for use with the Model Context Protocol (MCP) integration. Using only these approved models will ensure successful API calls and prevent errors.

## Supported Models

Perplexity offers different model categories, each optimized for specific use cases:

### Search Models
Models designed to retrieve and synthesize information efficiently:

| Model | Description | Best Used For |
|-------|-------------|--------------|
| `sonar-pro` | Advanced search offering with grounding, supporting complex queries and follow-ups | Complex information retrieval tasks requiring contextual understanding |
| `sonar` | Lightweight, cost-effective search model with grounding | Quick factual queries, topic summaries, product comparisons |

### Research Models
Models that conduct in-depth analysis and generate detailed reports:

| Model | Description | Best Used For |
|-------|-------------|--------------|
| `sonar-deep-research` | Expert-level research model conducting exhaustive searches and generating comprehensive reports | Comprehensive topic reports, in-depth analysis with exhaustive web research |

### Reasoning Models
Models that excel at complex, multi-step tasks:

| Model | Description | Best Used For |
|-------|-------------|--------------|
| `sonar-reasoning-pro` | Premier reasoning offering powered by DeepSeek R1 with Chain of Thought (CoT) | Complex analyses requiring step-by-step thinking |
| `sonar-reasoning` | Fast, real-time reasoning model designed for quick problem-solving with search | Tasks needing adherence to instructions and logical problem-solving |

### Offline Models
Chat models that do not use the search subsystem:

| Model | Description | Best Used For |
|-------|-------------|--------------|
| `r1-1776` | A version of DeepSeek R1 post-trained for uncensored, unbiased, and factual information | Creative content generation and tasks not requiring up-to-date web information |

## Context Length Information

| Model | Context Length | Model Type |
|-------|---------------|------------|
| `sonar-deep-research` | 128k | Chat Completion |
| `sonar-reasoning-pro` | 128k | Chat Completion |
| `sonar-reasoning` | 128k | Chat Completion |
| `sonar-pro` | 200k | Chat Completion |
| `sonar` | 128k | Chat Completion |
| `r1-1776` | 128k | Chat Completion |

Note: `sonar-pro` has a max output token limit of 8k. The reasoning models output Chain of Thought (CoT) responses.

## Usage Examples

### Search Tool

```
<use_mcp_tool>
<server_name>perplexity-ai</server_name>
<tool_name>search</tool_name>
<arguments>
{
  "query": "What are the latest advancements in quantum computing?",
  "num_results": 3
}
</arguments>
</use_mcp_tool>
```

### Ask Tool with Different Models

#### For Quick Information (sonar)
```
<use_mcp_tool>
<server_name>perplexity-ai</server_name>
<tool_name>ask</tool_name>
<arguments>
{
  "query": "What is the capital of France?",
  "model": "sonar"
}
</arguments>
</use_mcp_tool>
```

#### For In-depth Research (sonar-deep-research)
```
<use_mcp_tool>
<server_name>perplexity-ai</server_name>
<tool_name>ask</tool_name>
<arguments>
{
  "query": "Explain the current state of nuclear fusion research and major breakthroughs in the past year.",
  "model": "sonar-deep-research"
}
</arguments>
</use_mcp_tool>
```

#### For Complex Reasoning (sonar-reasoning)
```
<use_mcp_tool>
<server_name>perplexity-ai</server_name>
<tool_name>ask</tool_name>
<arguments>
{
  "query": "What would be the potential economic impacts of implementing a four-day work week globally?",
  "model": "sonar-reasoning"
}
</arguments>
</use_mcp_tool>
```

## Troubleshooting

If you encounter errors when using Perplexity AI through MCP:

1. **401 Unauthorized Errors**:
   - Verify your API key is valid and correctly set in MCP settings
   - Get a new key from [Perplexity AI settings](https://www.perplexity.ai/settings/api)
   - Check your Perplexity subscription plan - some features may require a paid plan:
     - The Free plan has limitations on API usage
     - Pro or higher plans may be required for full API access
     - Check [Perplexity pricing](https://www.perplexity.ai/pricing) for details

2. **400 Invalid Model Errors**:
   - Ensure you're using one of the approved models listed in this document
   - The model name in your request must exactly match one of these models
   - Perplexity occasionally updates their model offerings; refer to their [model documentation](https://docs.perplexity.ai/guides/model-cards) for the latest information

3. **Time-out Errors with Research Models**:
   - Note that `sonar-deep-research` may take 30+ minutes to process complex queries
   - For quick responses, use `sonar` or `sonar-reasoning` instead

4. **General Troubleshooting**:
   - Run diagnostic tests with `node test_perplexity_direct.js` to check direct API connectivity
   - Run MCP connection tests with `node test_perplexity_mcp.js`
   - Restart VS Code after updating settings