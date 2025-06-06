# 🎯 Complete Modes Reference

This document provides a comprehensive reference for all available modes in the Predictive AI Development Framework, based on the [`custom_modes.json`](custom_modes.json:1) configuration.

## Core Orchestration

### ⚡️ SPARC Orchestrator (Predictive)
**Slug:** `sparc`
**Role:** Orchestrates complex workflows with proactive problem prediction using research
**Key Features:**
- Enhanced SPARC methodology with predictive analysis
- Delegates to specialized modes with research mandates
- Tracks dependencies and coordinates rollbacks
- Enforces modularity (files < 500 lines) and secure configuration

### ❓ Ask (Predictive Task Formulation)
**Slug:** `ask`
**Role:** Guides users to formulate predictive tasks using SPARC methodology
**Key Features:**
- Helps frame tasks with research-first approach
- Provides mode-specific guidance for predictive development
- Emphasizes evidence-based justification
- Teaches "Look before you leap" thinking

## Research & Analysis

### 🔍 Research Specialist (Risk Focused)
**Slug:** `research-specialist`
**Role:** Identifies potential risks, pitfalls, and best practices proactively
**Key Features:**
- Focuses on problem prediction and risk identification
- Uses MCP tools for comprehensive research
- Prioritizes findings related to potential complexities
- Provides actionable recommendations with evidence

### 🔍 Researcher (gpt-4o-preview)
**Slug:** `researcher`
**Role:** Retrieves hyper-current documentation using CLI commands
**Key Features:**
- Uses gpt-4o-search-preview model for web searches
- Accesses most up-to-date authoritative sources
- Returns succinct results with direct citations
- Iterates up to 4 times to find requested information

## Design & Architecture

### 📋 Specification Writer (Predictive)
**Slug:** `spec-pseudocode`
**Role:** Captures requirements and translates to modular pseudocode with TDD anchors
**Key Features:**
- Research-first approach before writing pseudocode
- Predicts implementation challenges and edge cases
- Creates TDD anchors focusing on identified risks
- Justifies design decisions with research evidence

### 🏗️ Architect (Risk-Aware)
**Slug:** `architect`
**Role:** Designs scalable, secure, modular architectures with risk awareness
**Key Features:**
- Researches architectural patterns and trade-offs
- Addresses predicted risks in design decisions
- Creates Architecture Decision Records (ADRs)
- Emphasizes clear boundaries and extensibility

## Development & Implementation

### 🧠 Auto-Coder (Predictive & Validated)
**Slug:** `code`
**Role:** Writes clean, efficient, modular code after researching potential issues
**Key Features:**
- Mandatory research before implementation
- Evidence-based approach justification
- Strict modularity enforcement (< 500 lines)
- Secure configuration with no hardcoded secrets

### 🧪 Tester (TDD - Risk-Driven)
**Slug:** `tdd`
**Role:** Implements Test-Driven Development targeting predicted failure modes
**Key Features:**
- Risk-driven testing strategy
- Tests core functionality and predicted edge cases
- Property-based testing and fuzzing techniques
- Performance benchmarking integration

## Quality & Security

### 🪲 Debugger (Root Cause Focused)
**Slug:** `debug`
**Role:** Troubleshoots with deep understanding of code context and history
**Key Features:**
- Root cause analysis with research context
- Predicts fix impact and side effects
- Reviews code history and recent changes
- Implements targeted fixes with test cases

### 🛡️ Security Reviewer (Proactive & Informed)
**Slug:** `security-review`
**Role:** Performs audits informed by current threats and best practices
**Key Features:**
- Research current threats (OWASP Top 10)
- Proactive vulnerability scanning
- GDPR, HIPAA, SOC2 compliance verification
- Detailed security issue documentation

### 🔍 Code Reviewer (Predictive & Constructive)
**Slug:** `code-reviewer`
**Role:** Reviews code predicting issues missed by authors
**Key Features:**
- Predictive problem identification
- Research-backed best practices verification
- Constructive feedback with justification
- Risk mitigation confirmation

## Documentation & Integration

### 📚 Documentation Writer (Clarity Focused)
**Slug:** `docs-writer`
**Role:** Creates clear, modular Markdown documentation
**Key Features:**
- Research common user pain points
- Structured content with examples and diagrams
- Modular files under 500 lines
- No sensitive information exposure

### 🔗 System Integrator (Validated)
**Slug:** `integration`
**Role:** Merges components into working, tested, production-ready systems
**Key Features:**
- Research integration patterns and compatibility
- Contract testing for service interactions
- Feature flags for controlled rollouts
- Interface compatibility verification

## Infrastructure & DevOps

### 🚀 DevOps (Predictive & Secure)
**Slug:** `devops`
**Role:** Deploys and manages systems with research-backed security measures
**Key Features:**
- Infrastructure as Code (IaC) implementation
- Secure secret management integration
- Blue-green and canary deployment strategies
- Network security and monitoring configuration

### 🚀 CI/CD Pipeline Engineer (Secure & Resilient)
**Slug:** `ci-cd-pipeline`
**Role:** Designs secure, resilient CI/CD pipelines with research-informed practices
**Key Features:**
- Research CI/CD security best practices
- Automated quality gates and security scanning
- Secure secret management in workflows
- Rollback procedures and monitoring hooks

## Repository Management

### 🔄 Git Manager (Strategic)
**Slug:** `git-manager`
**Role:** Manages repositories with research-informed branching strategies
**Key Features:**
- Research branching models and trade-offs
- Branch protection rules implementation
- Clean commit history maintenance
- PR process coordination

### 🏢 Repository Administrator (Best Practices)
**Slug:** `repo-admin`
**Role:** Configures repositories using researched best practices
**Key Features:**
- Secure default configurations
- Issue templates and project boards
- Security alerts and code scanning
- Access control and permissions management

### 📝 Issue Manager (Risk-Aware)
**Slug:** `issue-tracker`
**Role:** Manages issues with emphasis on risk identification
**Key Features:**
- Structured issue descriptions with risk assessment
- Prevents duplicate issues through search
- Clear labeling and milestone organization
- Progress tracking and resolution verification

## Monitoring & Optimization

### 📈 Deployment Monitor (Informed)
**Slug:** `post-deployment-monitoring-mode`
**Role:** Observes systems with knowledge of expected behaviors and failure modes
**Key Features:**
- Research expected performance metrics
- Configure monitoring based on researched expectations
- Anomaly detection and investigation
- Detailed issue reporting with context

### 🧹 Optimizer (Evidence-Based)
**Slug:** `refinement-optimization-mode`
**Role:** Refactors and improves performance based on evidence
**Key Features:**
- Evidence-based optimization targeting
- Research optimization techniques and trade-offs
- Validation of improvements without negative side effects
- Modular refactoring with test preservation

## Specialized Functions

### 🧰 DevX (Evidence-Based)
**Slug:** `devx`
**Role:** Enhances developer experience through optimized workflows and tooling
**Key Features:**
- Research developer pain points and productivity patterns
- Create templates, snippets, and standardized patterns
- Optimize build processes and feedback loops
- Design intuitive CLI tools and developer portals

### 🔐 IAM Specialist (Threat-Aware)
**Slug:** `iam-specialist`
**Role:** Designs identity and access management with threat prevention focus
**Key Features:**
- Research identity-related vulnerabilities and attack vectors
- Industry-standard authentication flows (OAuth, OIDC, SAML)
- Role-based and attribute-based access control models
- Secure session management and token handling

### 🧮 Data Engineer (Scalable & Resilient)
**Slug:** `data-engineer`
**Role:** Designs data systems with focus on scaling issues and resilience
**Key Features:**
- Research scaling bottlenecks and performance optimization
- ETL/ELT pipelines and data transformation processes
- Data validation, cleaning, and quality controls
- Analytics-ready structures and warehousing

### 🚦 API Designer (Evolution-Oriented)
**Slug:** `api-designer`
**Role:** Creates interfaces with sustainable evolution focus
**Key Features:**
- Research API patterns, pitfalls, and evolution strategies
- OpenAPI/Swagger, GraphQL, and gRPC specifications
- Versioning strategies and backwards compatibility
- Rate limiting, pagination, and caching strategies

### 📘 SPARC Tutorial (Predictive Workflow)
**Slug:** `tutorial`
**Role:** Guides users through the predictive SPARC methodology
**Key Features:**
- Teaches "Look Before You Leap" thinking models
- Evidence-based justification patterns
- Risk mitigation strategies
- Structured thinking models for development

## Usage Guidelines

### Common Patterns
1. **Research First**: All modes emphasize research before action
2. **Evidence-Based**: Decisions backed by research findings
3. **Modularity**: Files kept under 500 lines maximum
4. **Security**: No hardcoded secrets or sensitive data
5. **Documentation**: Clear justification and reasoning

### Delegation Flow
```
SPARC Orchestrator → Specialized Mode → Research → Implementation → Validation → Integration
```

### Key Principles
- Predict problems before they occur
- Justify all decisions with evidence
- Maintain strict modularity standards
- Ensure secure configuration practices
- Complete tasks with comprehensive summaries