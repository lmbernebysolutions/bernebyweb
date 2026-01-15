# CURSOR-OPTIMIERTE PROJEKTKONZEPTION & .cursorrules GENERATOR
## Kompletter Guide für Gemini Gem zur Web Dev Projekt-Automation

---

## 📋 INHALTSVERZEICHNIS

### TEIL 1: CURSOR-SPEZIFISCHE BEST PRACTICES
1.1 [Cursor Architecture Patterns](#11-cursor-architecture)
1.2 [Effective Prompt Engineering für Cursor](#12-cursor-prompt-engineering)
1.3 [Cursor-optimierte Projektstruktur](#13-projektstruktur)
1.4 [Multi-File Coordination in Cursor](#14-multi-file)

### TEIL 2: .cursorrules SPEZIFIKATION
2.1 [.cursorrules Anatomy](#21-anatomy)
2.2 [Context Window Optimization](#22-context)
2.3 [Codebase Rules Best Practices](#23-codebase-rules)
2.4 [Custom Instructions Patterns](#24-custom-instructions)

### TEIL 3: CURSOR-SPEZIFISCHE PROZESS-PROMPTS
3.1 [System Prompts für verschiedene Projekttypen](#31-system-prompts)
3.2 [Chain-of-Thought Prompting](#32-chain-of-thought)
3.3 [Iterative Refinement Workflows](#33-iterative)
3.4 [Error Recovery & Debugging Prompts](#34-error-recovery)

### TEIL 4: PROJEKTTYP-SPEZIFISCHE VORLAGEN
4.1 [React/Next.js Projekte](#41-react-nextjs)
4.2 [Full-Stack Applikationen](#42-fullstack)
4.3 [Design System Implementierung](#43-design-system)
4.4 [AI-Integration & Automation](#44-ai-integration)

### TEIL 5: CURSOR-WORKFLOW PATTERNS
5.1 [Parallel File Generation](#51-parallel)
5.2 [Automated Testing Prompts](#52-testing)
5.3 [Documentation Generation](#53-docs)
5.4 [Type Safety & Validation](#54-types)

---

# TEIL 1: CURSOR-SPEZIFISCHE BEST PRACTICES

## 1.1 Cursor Architecture Patterns <a id="11-cursor-architecture"></a>

### Pattern 1: Sequential Context Building

**Ziel:** Cursor mit graduell wachsendem Kontext informieren, um bessere Entscheidungen zu treffen.

**Implementation:**

```
SCHRITT 1: Project Setup & Configuration
├─ Projekttyp definieren (React, Next.js, Node.js, etc.)
├─ Tech Stack spezifizieren
├─ Projektstruktur vorgeben
└─ Dependencies & Versions festlegen

SCHRITT 2: Architecture Overview
├─ Folder Structure dokumentieren
├─ Naming Conventions erklären
├─ Design Pattern vorstellen (Atomic, Feature-based, etc.)
└─ Code Organization Standards setzen

SCHRITT 3: Feature-Specific Context
├─ Feature Specs und Requirements
├─ API/Interface Contracts
├─ Error Handling Strategies
└─ Testing Requirements

SCHRITT 4: Implementation Details
├─ Komponenten/Module erstellen
├─ Business Logic implementieren
├─ Error Handling integrieren
└─ Tests schreiben
```

**Praktisches Beispiel für React-Projekt:**

```markdown
# SCHRITT 1: PROJECT FOUNDATION

You are building a React + TypeScript dashboard application with the following stack:
- Framework: React 18 + Next.js 14 (App Router)
- Styling: Tailwind CSS v4 + CSS Modules
- State: TanStack Query v5 + Zustand
- Type Safety: TypeScript 5.3, strict mode
- Database: PostgreSQL + Prisma ORM
- Auth: NextAuth.js v5
- Deployment: Vercel

Project Structure:
```
my-dashboard/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Auth-related routes
│   │   ├── (dashboard)/  # Protected routes
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   │   ├── ui/           # Atomic Design: Atoms
│   │   ├── features/     # Atomic Design: Molecules + Organisms
│   │   └── layouts/      # Page layouts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities & helpers
│   │   ├── api/          # API clients
│   │   ├── db/           # Database utilities
│   │   └── utils/        # Helper functions
│   ├── types/            # TypeScript types & interfaces
│   ├── services/         # Business logic layer
│   └── styles/           # Global styles
├── prisma/
│   └── schema.prisma     # Database schema
├── .cursorrules          # Cursor-specific rules
└── tsconfig.json
```

Naming Conventions:
- Components: PascalCase (Button.tsx, UserCard.tsx)
- Utilities: camelCase (formatDate.ts, useAuth.ts)
- Constants: UPPER_CASE (API_URL, DEFAULT_PAGE_SIZE)
- Files: kebab-case for utility files (format-date.ts)
- Folders: kebab-case (user-profile, auth-provider)

---

# SCHRITT 2: CODE STANDARDS & PATTERNS

When writing code, follow these patterns:

## Component Pattern (React):
```tsx
'use client' // if client-side needed

import type { ReactNode } from 'react'
import { memo } from 'react'
import styles from './ComponentName.module.css'

interface ComponentNameProps {
  children?: ReactNode
  /** Description of prop */
  requiredProp: string
  /** @default 'medium' */
  size?: 'small' | 'medium' | 'large'
}

/**
 * ComponentName - Brief description of what component does
 * @example
 * <ComponentName requiredProp="test" size="large">
 *   Content
 * </ComponentName>
 */
const ComponentName = memo(function ComponentName({
  children,
  requiredProp,
  size = 'medium',
}: ComponentNameProps) {
  return (
    <div className={styles[`container-${size}`]}>
      {children}
    </div>
  )
})

export default ComponentName
```

## Hook Pattern:
```tsx
import { useCallback, useEffect, useState } from 'react'

/**
 * useCustomHook - Description
 * @param dependency - What it does
 * @returns - What it returns
 */
export function useCustomHook(dependency: string) {
  const [state, setState] = useState<string>('')

  const handleChange = useCallback((value: string) => {
    setState(value)
  }, [])

  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup
    }
  }, [dependency])

  return { state, handleChange }
}
```

## API Handler Pattern (Route Handler):
```tsx
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = createUserSchema.parse(body)
    
    // Your logic here
    
    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

# SCHRITT 3: FEATURE IMPLEMENTATION CHECKLIST

When implementing a new feature, ALWAYS:

✅ Create types first (interfaces in types/)
✅ Create API/service layer
✅ Create custom hooks if needed
✅ Create components (atomic from bottom-up)
✅ Create tests alongside code
✅ Create documentation in JSDoc comments
✅ Update .cursorrules if new patterns added

Feature: [Feature Name]
├── Types (types/[feature].ts)
├── Service/API Layer (services/[feature].ts)
├── Custom Hooks (hooks/use[Feature].ts)
├── Components
│   ├── Atoms (components/ui/)
│   ├── Molecules (components/features/[feature]/)
│   └── Organisms (components/features/[feature]/[Feature]Container.tsx)
├── Pages/Routes (app/[feature]/)
├── Tests
│   ├── Unit tests (*.test.ts)
│   ├── Component tests (*.test.tsx)
│   └── E2E tests (*.e2e.ts)
└── Documentation (README.md or JSDoc)
```

---

## 1.2 Effective Prompt Engineering für Cursor <a id="12-cursor-prompt-engineering"></a>

### Context Injection Strategy

**Problem:** Cursor hat limitiertes Context Window. Man muss klug entscheiden, was man included.

**Lösung: Hierarchical Context Loading**

```markdown
## CONTEXT HIERARCHY für Cursor

LEVEL 1: Always Include (Baseline)
├── Project structure overview
├── Tech stack & versions
├── Naming conventions
├── General code style guide
└── Error handling patterns

LEVEL 2: Feature-Specific (when working on feature)
├── Feature requirements
├── Related types/interfaces
├── Relevant API contracts
├── Dependencies & imports
└── Error scenarios for feature

LEVEL 3: File-Specific (when editing file)
├── Full file content
├── Imported types/dependencies
├── Related files (imports from)
└── Test file reference

LEVEL 4: Deep Context (if needed)
├── Related utility functions
├── Database schema snippets
├── API documentation
└── Third-party library examples
```

### PROMPT STRUCTURE FÜR CURSOR

**Template für effektive Cursor-Prompts:**

```markdown
# [TASK_TYPE]: [SPECIFIC_TASK_NAME]

## Context
[Kurze Zusammenfassung des Kontexts - was wird gemacht, warum]

## Specifications
- Requirement 1
- Requirement 2
- Requirement 3

## Constraints
- Constraint 1 (z.B. "Must work with existing auth system")
- Constraint 2 (z.B. "No external dependencies except listed in package.json")

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Related Files
- src/types/auth.ts (for type definitions)
- src/lib/api/user.ts (for API methods)
- src/components/ui/Button.tsx (reference component)

## Implementation Notes
[Any special considerations, gotchas, or design decisions]

## Example Usage (if applicable)
```tsx
// How component/function should be used
```
```

**Konkretes Beispiel:**

```markdown
# TASK: Create UserAuthForm Component

## Context
Creating a login form component that integrates with NextAuth.js v5. 
This form will be used on the /login page and must handle email/password auth 
with optional social logins (Google, GitHub).

## Specifications
- Email and password fields with validation
- "Remember me" checkbox
- Social login buttons (Google, GitHub)
- Error message display
- Loading state during submission
- Success redirect to dashboard
- Form reset after submission

## Constraints
- Must use React Hook Form for form management
- Must use zod for validation
- Must integrate with next/navigation for routing
- Must follow existing Button and Input components
- No external auth libraries beyond NextAuth.js v5

## Acceptance Criteria
- [ ] Form renders with email, password, remember-me, and social buttons
- [ ] Client-side validation works with zod schema
- [ ] Error messages display correctly
- [ ] Loading state shows during submission
- [ ] Successful login redirects to /dashboard
- [ ] Component has TypeScript types
- [ ] Component is exported from components/index.ts
- [ ] Storybook story created

## Related Files
- src/types/auth.ts (see UserAuthInput interface)
- src/lib/auth/validation.ts (reference LoginSchema)
- src/components/ui/Button.tsx (for button styling)
- src/components/ui/Input.tsx (for input field)
- src/hooks/useAuth.ts (for auth logic)

## Implementation Notes
- Use signIn() from next-auth/react for authentication
- Email should be case-insensitive
- Remember me should set cookie with 30-day expiry
- Social login should redirect to same callback URL
- Error messages should be user-friendly, not technical

## Example Usage
```tsx
import { UserAuthForm } from '@/components/forms'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UserAuthForm />
    </div>
  )
}
```
```

---

## 1.3 Cursor-optimierte Projektstruktur <a id="13-projektstruktur"></a>

### Folder Organization für Cursor-Kompatibilität

**Wichtig:** Cursor nutzt Folder Context für bessere Code Completion und Verstehen.

```
my-project/
│
├── .cursor/
│   ├── config.json              # Cursor workspace config
│   ├── commands.json            # Custom Cursor commands
│   └── README.md                # Cursor-specific documentation
│
├── .cursorrules                 # Main Cursor rules file
│
├── src/
│   │
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── LoginPage.test.tsx
│   │   │   └── register/
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── DashboardPage.test.tsx
│   │   │   └── settings/
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── [...]auth.ts
│   │   │   │   └── login/route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts         # GET, POST
│   │   │   │   └── [id]/route.ts    # GET, PUT, DELETE
│   │   │   └── README.md            # API documentation
│   │   │
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── not-found.tsx        # 404 page
│   │
│   ├── components/              # Component Library
│   │   ├── ui/                  # Atomic Design: Atoms
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts         # Barrel export
│   │   │
│   │   ├── features/            # Atomic Design: Molecules + Organisms
│   │   │   ├── auth/
│   │   │   │   ├── UserAuthForm.tsx
│   │   │   │   ├── SocialLoginButtons.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── user/
│   │   │   │   ├── UserProfile.tsx
│   │   │   │   ├── UserCard.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── dashboard/
│   │   │       ├── DashboardGrid.tsx
│   │   │       ├── StatCard.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layouts/
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── AuthLayout.tsx
│   │   │   └── MainLayout.tsx
│   │   │
│   │   └── index.ts             # Root barrel export
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   ├── useAuth.ts           # Authentication hook
│   │   ├── useFetch.ts          # Data fetching hook
│   │   ├── useDebounce.ts       # Debounce hook
│   │   └── index.ts
│   │
│   ├── lib/                     # Utilities & Helpers
│   │   ├── api/
│   │   │   ├── client.ts        # HTTP client (fetch/axios)
│   │   │   ├── user.ts          # User API methods
│   │   │   └── index.ts
│   │   │
│   │   ├── auth/
│   │   │   ├── validation.ts    # Auth validation schemas
│   │   │   ├── config.ts        # Auth configuration
│   │   │   └── index.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts            # classname utility
│   │   │   ├── format.ts        # Formatting utilities
│   │   │   ├── validate.ts      # Validation utilities
│   │   │   └── index.ts
│   │   │
│   │   ├── db/
│   │   │   ├── client.ts        # Prisma client
│   │   │   └── seed.ts          # Database seeding
│   │   │
│   │   └── constants/
│   │       ├── api.ts
│   │       ├── config.ts
│   │       └── index.ts
│   │
│   ├── types/                   # TypeScript Types & Interfaces
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── api.ts               # API response types
│   │   └── index.ts
│   │
│   ├── services/                # Business Logic Layer
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   └── index.ts
│   │
│   ├── styles/                  # Global Styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   └── README.md                # Source directory overview
│
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
│
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── tests/                       # Test files (alternative structure)
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   └── setup.ts
│
├── .env.local                   # Local environment variables (gitignored)
├── .env.example                 # Example environment variables
├── .eslintrc.json               # ESLint configuration
├── .prettierrc.json             # Prettier configuration
├── .gitignore
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── package.json
├── README.md                    # Main project README
└── ARCHITECTURE.md              # Detailed architecture documentation
```

**Warum diese Struktur für Cursor optimal ist:**

1. **Clear Separation of Concerns** - Cursor kann schneller Nav Paths verstehen
2. **Barrel Exports (index.ts)** - Cursor auto-completes imports besser
3. **Consistent Naming** - Pattern Recognition für Cursor verbessert
4. **Type Cohabitation** - Types neben Implementation (leichter Updates)
5. **API Layer Separation** - Cursor versteht Data Flow besser
6. **Test Cohabitation** - Tests neben Code (für Cursor Context)

---

## 1.4 Multi-File Coordination in Cursor <a id="14-multi-file"></a>

### Prompt Pattern für Multi-File Edits

**Problem:** Cursor generiert manchmal Dateien isoliert, ohne Konsistenz zwischen Files.

**Lösung: Coordinated Multi-File Prompts**

```markdown
# TASK: Create User Authentication System (Multi-File)

## Overview
Creating complete user authentication system with types, validation, 
API routes, hooks, and components. All files must work together seamlessly.

## Files to Create/Modify (in order)

### 1. Types Definition
**File:** `src/types/auth.ts`
- Define UserAuthInput interface
- Define UserAuthResponse interface
- Define AuthError type
- Define User type

### 2. Validation Schema
**File:** `src/lib/auth/validation.ts`
- Create LoginSchema with zod
- Create RegisterSchema with zod
- Export type inference for schemas

### 3. API Routes
**File:** `src/app/api/auth/login/route.ts`
- Handle POST request
- Validate input with LoginSchema
- Call auth service
- Return response

**File:** `src/app/api/auth/register/route.ts`
- Handle POST request
- Validate input with RegisterSchema
- Check existing user
- Create user in database
- Return response

### 4. Service Layer
**File:** `src/services/auth.service.ts`
- Implement login function
- Implement register function
- Implement password hashing
- Implement token generation

### 5. Custom Hook
**File:** `src/hooks/useAuth.ts`
- Implement useAuth hook
- Call API endpoints
- Manage loading/error states
- Return auth functions

### 6. Components
**File:** `src/components/ui/Input.tsx`
- Create reusable Input component
- Support error state
- Support loading state

**File:** `src/components/ui/Button.tsx`
- Create reusable Button component
- Support loading state
- Support disabled state

**File:** `src/components/features/auth/UserAuthForm.tsx`
- Create login form using React Hook Form
- Use validation schema
- Use custom Input and Button components
- Integrate with useAuth hook

### 7. Tests
**File:** `src/components/features/auth/UserAuthForm.test.tsx`
- Test form rendering
- Test form submission
- Test error handling
- Test loading states

## Dependencies Between Files
```
types/auth.ts
    ↓
lib/auth/validation.ts ← (extends types)
    ↓
services/auth.service.ts ← (uses types & validation)
    ↓
app/api/auth/*/route.ts ← (uses service)
    ↓
hooks/useAuth.ts ← (calls API routes)
    ↓
components/features/auth/UserAuthForm.tsx ← (uses hook & components)
```

## Implementation Order
1. Start with types (everything depends on this)
2. Create validation schemas
3. Implement services
4. Create API routes
5. Create custom hook
6. Create UI components
7. Create feature component
8. Create tests

## Consistency Rules
- All files must use same error handling pattern
- All API routes must follow same response structure
- All components must use same Button/Input components
- All types must be exported from types/index.ts
- All utilities must be exported from their index.ts

## Validation Checklist
After all files created:
- [ ] All imports resolve correctly
- [ ] Types align across all files
- [ ] API responses match types
- [ ] Hook uses correct API endpoints
- [ ] Components use correct hook
- [ ] Tests cover main flows
- [ ] No circular dependencies
- [ ] All exports in barrel files
```

---

# TEIL 2: .cursorrules SPEZIFIKATION

## 2.1 .cursorrules Anatomy <a id="21-anatomy"></a>

### Complete .cursorrules Template mit allen Sections

```yaml
# .cursorrules - Complete Cursor Configuration

# ============================================================================
# SECTION 1: PROJECT CONTEXT
# ============================================================================

project_type: "React + Next.js + TypeScript"
project_name: "My Dashboard Application"
project_version: "1.0.0"

tech_stack:
  framework: "Next.js 14 (App Router)"
  language: "TypeScript 5.3 (strict mode)"
  styling: "Tailwind CSS v4"
  state_management: "TanStack Query v5 + Zustand"
  ui_components: "Custom built + shadcn/ui"
  database: "PostgreSQL + Prisma ORM"
  authentication: "NextAuth.js v5"
  testing: "Vitest + React Testing Library"

# ============================================================================
# SECTION 2: CODING STYLE & CONVENTIONS
# ============================================================================

code_style:
  language: "TypeScript (strict mode enabled)"
  module_system: "ES Modules"
  import_style: "absolute imports with @/ alias"
  semicolons: true
  quotes: "single quotes"
  trailing_comma: "es5"
  line_length: 100
  indent: 2

naming_conventions:
  components: "PascalCase"        # Button.tsx, UserCard.tsx
  utilities: "camelCase"          # formatDate.ts, cn.ts
  constants: "UPPER_SNAKE_CASE"   # API_URL, DEFAULT_PAGE_SIZE
  files: "kebab-case"             # format-date.ts, user-card.tsx
  folders: "kebab-case"           # user-profile/, auth-provider/
  privates: "_prefixed"           # _internalHelper()
  types: "PascalCase"             # User, UserInput, UserResponse
  interfaces: "PrefixWithI or no prefix" # interface User or interface IUser (choose one)

# ============================================================================
# SECTION 3: ARCHITECTURE PATTERNS
# ============================================================================

architecture:
  pattern: "Feature-based folder structure"
  atomic_design: true
  
  folder_structure: |
    src/
    ├── app/              # Next.js App Router
    ├── components/       # Reusable components (ui/, features/, layouts/)
    ├── hooks/            # Custom React hooks
    ├── lib/              # Utilities (api, auth, utils, db)
    ├── services/         # Business logic layer
    ├── types/            # TypeScript definitions
    └── styles/           # Global styles

  component_patterns:
    - name: "Functional Components"
      example: |
        export function ComponentName() {
          return <div>Content</div>
        }
    
    - name: "Memoized Components"
      when: "Component doesn't need re-render often"
      example: |
        export const ComponentName = memo(function ComponentName() {
          return <div>Content</div>
        })
    
    - name: "Component with Props"
      example: |
        interface ComponentNameProps {
          /** Description of required prop */
          title: string
          /** @default false */
          disabled?: boolean
        }
        
        export function ComponentName({ title, disabled = false }: ComponentNameProps) {
          return <div>{title}</div>
        }

  file_collocation: true  # Tests next to components, types in same folder

# ============================================================================
# SECTION 4: LANGUAGE & FRAMEWORK RULES
# ============================================================================

typescript:
  strict_mode: true
  strict_rules:
    - "Avoid 'any' type - use 'unknown' with type guards"
    - "Always type function parameters"
    - "Always type return values for public functions"
    - "Use 'const' for type definitions unless interface needed"
    - "Use interface for object shapes, type for unions/utilities"
    - "Use satisfies operator for type checking without casting"

  import_rules:
    - "Use absolute imports with @/ prefix"
    - "No relative imports beyond ../../"
    - "Export types with 'type' keyword: export type User = {}"
    - "Separate type imports: import type { User } from '@/types'"
    - "Use barrel exports (index.ts) for each folder"

react_rules:
  - "Use functional components only"
  - "No class components"
  - "Use hooks for state and side effects"
  - "Use React.memo for expensive components"
  - "Use useCallback for stable function references"
  - "Use useMemo for expensive computations"
  - "Cleanup side effects in useEffect return"
  - "Always include dependency arrays in hooks"
  - "No useState for derived state - compute directly"

next_js_rules:
  - "Use App Router (src/app/), not Pages Router"
  - "Mark interactive components with 'use client'"
  - "Keep Server Components by default"
  - "Use Server Actions for mutations"
  - "Use Dynamic Imports for large components"
  - "Use next/image for all images"
  - "Use next/link for all internal navigation"
  - "Leverage route segments for organization"
  - "Use (groups) for route grouping without URL"

# ============================================================================
# SECTION 5: CODE QUALITY RULES
# ============================================================================

code_quality:
  error_handling: |
    - Always use try-catch for async operations
    - Return error responses with proper status codes
    - Never console.log in production code
    - Create custom error types for different scenarios
    - Use zod for runtime validation
    - Validate all API inputs

  testing:
    required: true
    min_coverage: 80
    patterns:
      - "Unit tests for utilities and hooks"
      - "Component tests for UI components"
      - "Integration tests for features"
      - "E2E tests for critical user flows"
    naming: "[file].test.ts or [file].test.tsx"

  performance:
    rules:
      - "Use dynamic imports for route-specific code"
      - "Implement image optimization with next/image"
      - "Use useMemo for expensive computations"
      - "Implement virtual scrolling for large lists"
      - "Code-split large components"
      - "Lazy load below-the-fold content"

  accessibility:
    wcag_level: "AA"
    rules:
      - "All buttons/inputs must have accessible labels"
      - "Use semantic HTML (button, nav, main, etc.)"
      - "Color contrast ratio minimum 4.5:1"
      - "Test with keyboard navigation"
      - "Add aria-labels where needed"

# ============================================================================
# SECTION 6: API & DATA LAYER
# ============================================================================

api_layer:
  base_url: "process.env.NEXT_PUBLIC_API_URL"
  client: "fetch API (no external HTTP library)"
  
  route_handler_pattern: |
    export async function POST(request: NextRequest) {
      try {
        const body = await request.json()
        const validated = schema.parse(body)
        
        // Business logic
        
        return NextResponse.json(result, { status: 200 })
      } catch (error) {
        if (error instanceof ZodError) {
          return NextResponse.json({ error: error.errors }, { status: 400 })
        }
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
      }
    }

  response_structure:
    success: |
      {
        "success": true,
        "data": { /* payload */ },
        "message": "Optional success message"
      }
    
    error: |
      {
        "success": false,
        "error": "Error message",
        "code": "ERROR_CODE",
        "details": {} // Optional error details
      }

  validation:
    library: "zod"
    pattern: |
      import { z } from 'zod'
      
      const UserSchema = z.object({
        email: z.string().email(),
        name: z.string().min(1),
      })
      
      type User = z.infer<typeof UserSchema>

database:
  orm: "Prisma"
  database: "PostgreSQL"
  patterns:
    - "Define types in Prisma schema"
    - "Use Prisma client for queries"
    - "Use transactions for multi-step operations"
    - "Index frequently queried fields"
    - "Use relationships instead of manual joins"

# ============================================================================
# SECTION 7: STYLING & THEMING
# ============================================================================

styling:
  framework: "Tailwind CSS v4"
  approach: "Utility-first with CSS Modules for complex cases"
  
  class_organization: |
    Apply classes in this order:
    1. Layout (flex, grid, block)
    2. Sizing (w-, h-)
    3. Spacing (p-, m-)
    4. Colors (bg-, text-, border-)
    5. Typography (font-, text-)
    6. Effects (shadow, opacity)
    7. State (hover:, focus:, active:)
    8. Responsive (sm:, md:, lg:)

  css_modules:
    use_for: "Complex layout components and animations"
    pattern: |
      // ComponentName.module.css
      .container {
        display: grid;
        gap: 1rem;
      }
      
      .container[data-layout='column'] {
        grid-template-columns: 1fr;
      }
      
      // ComponentName.tsx
      import styles from './ComponentName.module.css'
      
      <div className={styles.container} data-layout="row">

  dark_mode: true
  prefers_color_scheme: "respects system preference"

# ============================================================================
# SECTION 8: SECURITY RULES
# ============================================================================

security:
  authentication:
    library: "NextAuth.js v5"
    rules:
      - "Protect API routes with session verification"
      - "Use CSRF protection for state-changing operations"
      - "Never expose sensitive data in client code"
      - "Validate all user inputs server-side"
      - "Use httpOnly cookies for sensitive data"

  environment_variables:
    rules:
      - "NEXT_PUBLIC_ prefix only for public variables"
      - "Store secrets in .env.local (gitignored)"
      - ".env.example shows all required variables"
      - "Never commit secrets to repository"

  data_validation:
    rules:
      - "Always validate input on both client and server"
      - "Use zod for runtime schema validation"
      - "Sanitize user input before database operations"
      - "Escape HTML content to prevent XSS"

# ============================================================================
# SECTION 9: DEPENDENCY MANAGEMENT
# ============================================================================

dependencies:
  core:
    - "react@18"
    - "react-dom@18"
    - "next@14"
    - "typescript@5.3"

  styling:
    - "tailwindcss@4"
    - "@tailwindcss/forms"

  forms:
    - "react-hook-form@7"
    - "zod@3"

  data_fetching:
    - "@tanstack/react-query@5"

  state:
    - "zustand@4"

  ui_components:
    - "radix-ui (when needed)"
    - "shadcn/ui (built-in components)"

  database:
    - "prisma@5"
    - "@prisma/client@5"

  auth:
    - "next-auth@5"

  utils:
    - "clsx or classnames"

  testing:
    - "vitest"
    - "@testing-library/react"
    - "@testing-library/jest-dom"

  avoid:
    - "No moment.js (use date-fns)"
    - "No jQuery"
    - "No Redux (use Zustand)"
    - "No Webpack plugins without justification"

# ============================================================================
# SECTION 10: COMMON TASKS & WORKFLOWS
# ============================================================================

workflows:
  creating_component: |
    1. Create types first: src/types/[feature].ts
    2. Create component in src/components/features/[feature]/
    3. Add TypeScript interface for props
    4. Write component with JSDoc comments
    5. Create stories for Storybook
    6. Create tests
    7. Export from components/index.ts

  creating_api_route: |
    1. Create validation schema in lib/[feature]/validation.ts
    2. Create service in services/[feature].service.ts
    3. Create route in app/api/[feature]/route.ts
    4. Add error handling with try-catch
    5. Return proper response structure
    6. Write tests

  adding_feature: |
    1. Create feature folder in components/features/[feature]/
    2. Create types in types/[feature].ts
    3. Create service in services/[feature].service.ts
    4. Create custom hook in hooks/use[Feature].ts
    5. Create components (atoms → molecules → organisms)
    6. Create API routes if needed
    7. Create tests
    8. Create documentation

# ============================================================================
# SECTION 11: DOCUMENTATION
# ============================================================================

documentation:
  patterns:
    - "JSDoc comments for all exported functions"
    - "TypeScript interfaces are self-documenting"
    - "README.md for each major folder"
    - "ARCHITECTURE.md for system design"
    - "Storybook stories for component documentation"

  jsdoc_template: |
    /**
     * Brief description of what function/component does
     * 
     * Longer explanation if needed.
     * 
     * @example
     * ```tsx
     * const result = functionName(param1, param2)
     * ```
     * 
     * @param {type} paramName - Description
     * @returns {type} Description of return value
     * @throws {ErrorType} When it throws
     */

# ============================================================================
# SECTION 12: GIT & COMMIT CONVENTIONS
# ============================================================================

git:
  branch_naming: "feature/feature-name, fix/bug-name, docs/change-name"
  commit_messages:
    format: "type(scope): description"
    types:
      - "feat: new feature"
      - "fix: bug fix"
      - "docs: documentation"
      - "style: formatting"
      - "refactor: code reorganization"
      - "perf: performance improvement"
      - "test: test addition/modification"
      - "chore: dependency updates"

# ============================================================================
# SECTION 13: CURSOR-SPECIFIC SETTINGS
# ============================================================================

cursor_settings:
  tab_size: 2
  use_spaces: true
  auto_format: true
  format_on_save: true
  
  exclude_folders:
    - "node_modules"
    - ".next"
    - "dist"
    - "build"
    - ".git"
    - ".turbo"

  include_patterns:
    - "src/**"
    - "app/**"
    - "components/**"
    - "prisma/**"
    - "tests/**"

  context_hints:
    enabled: true
    include_tests: true
    include_types: true

  ai_instructions: |
    When generating code:
    1. Always start with types/interfaces
    2. Always include error handling
    3. Always add JSDoc comments
    4. Always use TypeScript strict mode
    5. Always follow naming conventions above
    6. Always consider accessibility
    7. Always add tests
    8. Always verify imports resolve

# ============================================================================
# SECTION 14: PROJECT-SPECIFIC RULES
# ============================================================================

project_rules:
  rule_1: "All components must be in src/components/"
  rule_2: "All utilities must be in src/lib/ with barrel exports"
  rule_3: "All API routes must follow REST conventions"
  rule_4: "All types must be exported from src/types/index.ts"
  rule_5: "No hardcoded values - use constants from lib/constants/"
  rule_6: "All async operations must have error handling"
  rule_7: "All user-facing strings must support i18n (if needed)"
  rule_8: "Tests must be in same folder as source files"

# ============================================================================
# SECTION 15: FREQUENTLY ASKED QUESTIONS
# ============================================================================

faq:
  q1: "Where should I put utility functions?"
  a1: "In src/lib/utils/ with barrel export in index.ts"

  q2: "How do I create a new page?"
  a2: "Create folder in src/app/[feature]/page.tsx for App Router"

  q3: "When should I use useCallback?"
  a3: "Only for functions passed as dependencies to other hooks"

  q4: "Should I use CSS or Tailwind?"
  a4: "Use Tailwind first, CSS Modules for complex cases"

  q5: "How do I handle errors in API routes?"
  a5: "Use try-catch and return proper error response with status code"
```

---

## 2.2 Context Window Optimization <a id="22-context"></a>

### Smart Context Loading für Cursor

**Problem:** Cursor hat ~8K Token Context Window. Zu viel Code = schlechte Suggestions.

**Lösung: Progressive Context Disclosure**

```markdown
# CONTEXT LOADING STRATEGY

## LEVEL 1: Baseline Context (IMMER laden)
- .cursorrules (dieses File)
- tsconfig.json (5KB)
- package.json (3KB)
Total: ~8KB

## LEVEL 2: Feature Context (wenn an Feature arbeitet)
```json
{
  "when_working_on_auth": {
    "include": [
      "src/types/auth.ts",
      "src/lib/auth/validation.ts",
      "src/services/auth.service.ts",
      "src/hooks/useAuth.ts",
      "src/components/ui/Button.tsx",
      "src/components/ui/Input.tsx"
    ],
    "total_tokens": "~4KB"
  },
  
  "when_working_on_dashboard": {
    "include": [
      "src/types/dashboard.ts",
      "src/components/features/dashboard/DashboardGrid.tsx",
      "src/components/features/dashboard/StatCard.tsx",
      "src/services/dashboard.service.ts"
    ],
    "total_tokens": "~3KB"
  }
}
```

## LEVEL 3: File-Specific Context (automatisch)
- Aktuell bearbeitetes File (~2KB)
- Imported Files (~2KB)
Total: ~4KB

## LEVEL 4: Deep Context (on-demand)
- Database schema (1KB)
- API documentation (1KB)
- Type definitions (2KB)
Total: ~4KB

**Total verfügbar: ~8KB für Cursor Suggestions**

### Cursor Context File zu erstellen:

```yaml
# .cursor/context.yml

default_includes:
  - ".cursorrules"
  - "tsconfig.json"
  - "package.json"
  - "src/types/index.ts"

feature_contexts:
  auth:
    files:
      - "src/types/auth.ts"
      - "src/lib/auth/validation.ts"
      - "src/services/auth.service.ts"
      - "src/hooks/useAuth.ts"
    size_estimate: "4KB"
    
  dashboard:
    files:
      - "src/types/dashboard.ts"
      - "src/components/features/dashboard"
      - "src/services/dashboard.service.ts"
    size_estimate: "3KB"

  user:
    files:
      - "src/types/user.ts"
      - "src/components/features/user"
      - "src/services/user.service.ts"
      - "src/app/api/users"
    size_estimate: "5KB"

# Große Files zu vermeiden
exclude:
  - "node_modules"
  - "dist"
  - ".next"
  - ".turbo"
  - "public"
```

---

## 2.3 Codebase Rules Best Practices <a id="23-codebase-rules"></a>

### Detaillierte Rules für verschiedene Kontexte

```yaml
# .cursorrules - Detailed Rules Section

codebase_patterns:
  
  # ========== REACT COMPONENTS ==========
  react_component:
    pattern: |
      'use client' // if interactive
      
      import type { ReactNode } from 'react'
      import { memo } from 'react'
      
      interface ComponentProps {
        /** @default value */
        prop: string
      }
      
      export const Component = memo(function Component({ prop }: ComponentProps) {
        return <div>{prop}</div>
      })
    
    checklist:
      - Has TypeScript interface for props
      - Uses memo for optimization
      - Has JSDoc comment
      - Exports with proper name
      - Uses 'use client' if interactive

  # ========== CUSTOM HOOKS ==========
  custom_hook:
    pattern: |
      import { useCallback, useEffect, useState } from 'react'
      
      /**
       * useCustomHook - Description
       * @param dependency - What depends
       * @returns Object with state and handlers
       */
      export function useCustomHook(dependency: string) {
        const [state, setState] = useState('')
        
        const handler = useCallback(() => {
          // Logic
        }, [])
        
        useEffect(() => {
          return () => {
            // Cleanup
          }
        }, [dependency])
        
        return { state, handler }
      }
    
    checklist:
      - Uses proper hook dependencies
      - Has cleanup in useEffect
      - Uses useCallback for functions
      - Documented with JSDoc

  # ========== API ROUTES ==========
  api_route:
    pattern: |
      import { NextRequest, NextResponse } from 'next/server'
      import { z } from 'zod'
      
      const schema = z.object({
        /* fields */
      })
      
      export async function POST(request: NextRequest) {
        try {
          const body = await request.json()
          const data = schema.parse(body)
          
          // Business logic
          
          return NextResponse.json(result, { status: 201 })
        } catch (error) {
          if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 })
          }
          return NextResponse.json({ error: 'Error' }, { status: 500 })
        }
      }
    
    checklist:
      - Has validation schema
      - Has try-catch
      - Proper HTTP status codes
      - Proper error responses

  # ========== SERVICES ==========
  service_file:
    pattern: |
      export class UserService {
        static async getUser(id: string) {
          // Database query
        }
        
        static async updateUser(id: string, data: UserInput) {
          // Validation + database update
        }
        
        static async deleteUser(id: string) {
          // Database delete
        }
      }
    
    checklist:
      - Static methods or class
      - Async/await for operations
      - Error handling
      - Documented methods

  # ========== UTILITIES ==========
  utility_function:
    pattern: |
      /**
       * formatDate - Formats date to readable string
       * @param date - Date to format
       * @param format - Format string
       * @returns Formatted date string
       */
      export function formatDate(date: Date, format: string): string {
        // Implementation
        return formatted
      }
    
    checklist:
      - Pure function (no side effects)
      - Typed parameters and return
      - JSDoc comment
      - Exported with 'export'

  # ========== TYPES ==========
  type_definition:
    pattern: |
      export type User = {
        id: string
        email: string
        name: string
        createdAt: Date
      }
      
      export type UserInput = Omit<User, 'id' | 'createdAt'>
      
      export type UserResponse = User & {
        role: 'admin' | 'user'
      }
    
    checklist:
      - Related types in same file
      - Reuse with Omit, Pick, Partial
      - Clear naming (Input, Response)
      - Exported

  # ========== TESTS ==========
  test_file:
    pattern: |
      import { describe, it, expect, beforeEach } from 'vitest'
      import { Component } from './Component'
      
      describe('Component', () => {
        let props
        
        beforeEach(() => {
          props = { /* default props */ }
        })
        
        it('should render', () => {
          const { container } = render(<Component {...props} />)
          expect(container).toBeTruthy()
        })
        
        it('should handle click', async () => {
          const { getByRole } = render(<Component {...props} />)
          const button = getByRole('button')
          await userEvent.click(button)
          expect(/* assertion */).toBe(true)
        })
      })
    
    checklist:
      - Describe block for component
      - beforeEach for setup
      - Clear test names
      - Proper assertions
```

---

## 2.4 Custom Instructions Patterns <a id="24-custom-instructions"></a>

### Projekt-spezifische Custom Instructions

```markdown
# CUSTOM INSTRUCTIONS für Cursor

Diese werden in .cursor/instructions.md definiert und Cursor
lädt sie automatisch für jeden Prompt.

---

## 🎯 GENERAL INSTRUCTIONS

### Code Generation
When generating code:
- Always think about types first
- Always consider error cases
- Always test in your head
- Always verify imports
- Always follow naming conventions
- Always add JSDoc comments

### File Creation
When creating new files:
- Put in correct folder structure
- Add to barrel exports (index.ts)
- Add TypeScript types
- Add JSDoc comments
- Add tests in same folder
- Update this .cursorrules if pattern new

### Code Review (Before Suggesting)
Before suggesting code, verify:
- ✓ Types are correct and exported
- ✓ Imports will resolve
- ✓ Error handling included
- ✓ Follows project patterns
- ✓ No circular dependencies
- ✓ Names follow conventions

---

## 🏗️ ARCHITECTURE INSTRUCTIONS

### When Creating Components
1. Start with TypeScript interface for props
2. Use memo() for optimization
3. Add JSDoc comment
4. Create test file
5. Export from components/index.ts

Example structure:
```
src/components/features/[feature]/
├── ComponentName.tsx
├── ComponentName.test.tsx
├── ComponentName.module.css (if needed)
└── index.ts (barrel export)
```

### When Creating APIs
1. Create validation schema first (lib/[feature]/validation.ts)
2. Create service (services/[feature].service.ts)
3. Create route handler (app/api/[feature]/route.ts)
4. Add error handling
5. Write tests

### When Creating Types
1. Group related types together
2. Use Omit, Pick for reuse
3. Export from types/index.ts
4. Use type inference where possible

---

## 🔧 SPECIFIC WORKFLOWS

### Adding New Feature
```
STEP 1: Types & Interfaces
├─ src/types/[feature].ts
├─ Export all types

STEP 2: Validation & Services
├─ src/lib/[feature]/validation.ts
├─ src/services/[feature].service.ts

STEP 3: API Routes (if needed)
├─ src/app/api/[feature]/route.ts
├─ Add error handling

STEP 4: Custom Hooks (if needed)
├─ src/hooks/use[Feature].ts

STEP 5: Components (atomic approach)
├─ Atoms: src/components/ui/[Atom].tsx
├─ Molecules: src/components/features/[feature]/[Molecule].tsx
├─ Organisms: src/components/features/[feature]/[Feature].tsx

STEP 6: Pages/Routes
├─ src/app/[feature]/page.tsx

STEP 7: Tests
├─ [Feature].test.tsx next to component

STEP 8: Documentation
├─ Update README.md if needed
├─ Add JSDoc comments
```

### Debugging Code
When user shows code with error:
1. Identify the error type
2. Check types first
3. Check imports second
4. Check async/await usage
5. Check error handling
6. Provide minimal fix

---

## 📝 CODE QUALITY CHECKLIST

When reviewing generated code:

### TypeScript
- [ ] No 'any' types
- [ ] All functions have return types
- [ ] All parameters have types
- [ ] Strict mode compatible
- [ ] No unnecessary type assertions

### Components
- [ ] Has TypeScript interface
- [ ] Has JSDoc comment
- [ ] Uses memo if needed
- [ ] Cleanup effects
- [ ] Proper dependency arrays

### API Routes
- [ ] Has validation schema
- [ ] Has try-catch
- [ ] Returns proper status codes
- [ ] Error handling
- [ ] Input validation

### Tests
- [ ] Tests main functionality
- [ ] Tests error cases
- [ ] Tests edge cases
- [ ] Clear test names
- [ ] Proper assertions

### Security
- [ ] No hardcoded secrets
- [ ] Input validated
- [ ] XSS protection
- [ ] CSRF protection
- [ ] Proper error messages

---

## 🚫 ANTI-PATTERNS TO AVOID

❌ NEVER:
- Use 'any' type
- Ignore TypeScript errors
- Hardcode API endpoints
- Skip error handling
- Create circular imports
- Use relative imports beyond ../../
- Mutate props
- Use useState for derived state
- Forget dependency arrays
- Console.log in production

✅ INSTEAD:
- Use 'unknown' with type guards
- Fix TypeScript errors
- Use env variables
- Always add try-catch
- Keep imports flat
- Use absolute imports
- Keep components pure
- Compute derived values
- Always include deps array
- Use proper logging library

---

## 📚 COMMON PATTERNS TO USE

### Pattern 1: Data Fetching
```tsx
function Component() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id],
    queryFn: async () => await api.getUser(id)
  })
  
  if (isLoading) return <Loading />
  if (error) return <Error message={error} />
  return <div>{data.name}</div>
}
```

### Pattern 2: Form Handling
```tsx
function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  )
}
```

### Pattern 3: State Management
```tsx
const useStore = create((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}))

// In component
const count = useStore(state => state.count)
```

### Pattern 4: Error Boundary
```tsx
function ErrorFallback({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Component />
</ErrorBoundary>
```

---

## 💡 HELPFUL TIPS FOR CURSOR

### Context Optimization
- Start small, add context as needed
- Reference existing files instead of pasting
- Use @-mentions for specific files
- Let Cursor discover patterns from codebase

### Debugging with Cursor
- Show error message clearly
- Show relevant code snippet
- Describe what you expected
- Describe what happened instead
- Ask for specific fix or explanation

### Getting Best Results
- Be specific about what you want
- Reference existing patterns
- Use the terminology from .cursorrules
- Ask for complete files, not snippets
- Review generated code before accepting

### Using Commands (@-mentions)
```
@types/auth.ts - for type references
@components/ui/Button.tsx - for component examples
@services/user.service.ts - for service examples
@app/api/users/route.ts - for API route examples
.cursorrules - for style/pattern reference
```

---

## 🔄 ITERATIVE DEVELOPMENT WORKFLOW

1. **Initial Concept**
   - Describe feature clearly
   - Reference existing patterns
   - Ask for file structure

2. **Type Definitions**
   - Create types first
   - Define interfaces
   - Export from types/

3. **Business Logic**
   - Create services
   - Implement validation
   - Add error handling

4. **API/Data Layer**
   - Create route handlers
   - Add error handling
   - Return proper responses

5. **Components**
   - Start with atoms (ui/)
   - Build to molecules
   - Build to organisms
   - Wire with hooks

6. **Testing**
   - Unit test utils
   - Component test UI
   - Integration tests
   - E2E tests for critical flows

7. **Refinement**
   - Performance optimization
   - Accessibility checks
   - Code review
   - Documentation

---

## 📞 ASK FOR HELP WHEN:

- "What's the best way to..."
- "Should I use X or Y..."
- "Can you review this pattern..."
- "How do I structure..."
- "What's the TypeScript way..."
- "How does this integrate..."
- "Can you explain why..."
```

---

# TEIL 3: CURSOR-SPEZIFISCHE PROZESS-PROMPTS

## 3.1 System Prompts für verschiedene Projekttypen <a id="31-system-prompts"></a>

### React/Next.js Project System Prompt

```markdown
# SYSTEM PROMPT: React + Next.js 14 Development

You are an expert React and Next.js development assistant specializing in 
building production-grade applications with TypeScript, Tailwind CSS, and 
modern tooling.

## Your Role
- Generate clean, type-safe React code
- Architect scalable Next.js applications
- Implement best practices for performance and accessibility
- Provide guidance on design patterns and project structure
- Suggest optimizations and improvements
- Review code for quality and security

## Context
This project uses:
- React 18 with TypeScript in strict mode
- Next.js 14 with App Router
- Tailwind CSS v4 for styling
- TanStack Query for data fetching
- Zustand for state management
- Prisma for database access
- NextAuth.js for authentication

## Your Guidelines

### 1. Code Quality
- Always use TypeScript strict mode
- Never use 'any' - use 'unknown' with type guards
- All functions must have return type annotations
- All component props must have TypeScript interfaces
- Use const assertions instead of 'as' casts

### 2. Architecture
- Follow atomic design pattern (atoms → molecules → organisms)
- Keep components small and focused (single responsibility)
- Extract business logic into services
- Use custom hooks for shared component logic
- Keep API layer separate from UI components

### 3. Performance
- Use React.memo() for expensive components
- Implement useCallback for stable function references
- Use useMemo for expensive computations
- Code-split with dynamic imports
- Use next/image for all images
- Implement virtual scrolling for large lists

### 4. Security
- Always validate user input on server
- Never expose secrets in client code
- Use httpOnly cookies for sensitive data
- Sanitize HTML content
- Use CSRF protection

### 5. Testing
- Write tests alongside code
- Test component behavior, not implementation
- Aim for 80%+ code coverage
- Test error states and edge cases
- Use semantic queries for testing

## When Generating Code

1. **Always start with types**
   - Define interfaces for data structures
   - Define input/output types for functions
   - Export types for reuse

2. **Always add error handling**
   - Use try-catch for async operations
   - Validate inputs with zod
   - Return meaningful error messages
   - Handle edge cases

3. **Always optimize**
   - Consider performance implications
   - Use appropriate caching strategies
   - Implement proper error boundaries
   - Add loading and error states

4. **Always document**
   - Add JSDoc comments for public APIs
   - Include example usage
   - Explain complex logic
   - Document assumptions

## File Structure
```
src/
├── app/              # Next.js routes
├── components/       # React components
│   ├── ui/          # Atomic components
│   ├── features/    # Feature components
│   └── layouts/     # Layout wrappers
├── hooks/           # Custom hooks
├── lib/             # Utilities
│   ├── api/         # API clients
│   ├── auth/        # Auth utilities
│   └── utils/       # Helpers
├── services/        # Business logic
├── types/           # TypeScript types
└── styles/          # Global styles
```

## Naming Conventions
- Components: PascalCase (Button.tsx)
- Utilities: camelCase (formatDate.ts)
- Constants: UPPER_SNAKE_CASE (API_URL)
- Types: PascalCase (User, UserInput)
- Folders: kebab-case (user-profile)

## Response Format
When generating code:
1. Provide brief explanation of what you're creating
2. Show the complete, production-ready code
3. Explain key decisions
4. Suggest tests if not included
5. Point out integration points with existing code

## Avoid These

❌ Using 'any' type
❌ Hardcoding values
❌ Ignoring error cases
❌ Creating circular dependencies
❌ Using relative imports beyond ../../
❌ Mutating props
❌ Missing TypeScript types
❌ Skipping tests
❌ Console.log in production
❌ Inline styles (use Tailwind)

## Encourage These

✅ TypeScript strict mode
✅ Type inference with satisfies
✅ Semantic HTML
✅ Error boundaries
✅ Loading states
✅ Accessibility (WCAG 2.2)
✅ Responsive design
✅ Proper dependency handling
✅ Clean code principles
✅ Best practices

## When Unsure

If you're unsure about the best approach:
1. Ask clarifying questions
2. Suggest alternatives with pros/cons
3. Reference similar patterns in the codebase
4. Provide multiple options
5. Explain your reasoning

Remember: Your goal is to help the developer write better code, 
not just generate code. Educate and guide as you help.
```

---

### Full-Stack Application System Prompt

```markdown
# SYSTEM PROMPT: Full-Stack Web Application Development

You are an expert full-stack development assistant helping build complete
web applications with database, backend, and frontend components working
together seamlessly.

## Your Expertise
- Database design with Prisma and PostgreSQL
- Backend API development with Next.js Route Handlers
- Frontend development with React and TypeScript
- Real-time features and WebSockets
- Authentication and authorization
- Performance optimization across the stack
- Deployment and scaling considerations

## Architecture Overview
```
Frontend (React/Next.js)
    ↓
API Routes (Next.js)
    ↓
Business Logic (Services)
    ↓
Database (Prisma + PostgreSQL)
```

## Key Principles

### 1. Data Flow
- Client sends request with validated data
- API route validates and authorizes
- Service layer handles business logic
- Database performs operations
- Response sent back to client with proper status code

### 2. Type Safety Across Stack
- Define types in Prisma schema (source of truth)
- Infer types from Prisma for use in backend
- Generate types for frontend from API responses
- Use zod for runtime validation

### 3. API Design
- RESTful endpoints
- Consistent response structure
- Proper HTTP status codes
- Clear error messages
- Input validation on server

### 4. Database Design
- Proper indexes on frequently queried fields
- Foreign keys for relationships
- Cascading deletes where appropriate
- Soft deletes for important data
- Timestamps (createdAt, updatedAt)

## Common Patterns

### Database Transaction
```prisma
// In Prisma schema
model User {
  id String @id @default(cuid())
  email String @unique
  posts Post[]
  createdAt DateTime @default(now())
}

model Post {
  id String @id @default(cuid())
  title String
  userId String
  user User @relation(fields: [userId], references: [id])
}
```

### API Route with Validation
```typescript
// Validate input
const data = await schema.parse(body)

// Business logic
const result = await service.create(data)

// Return response
return NextResponse.json(result)
```

### Component with Data
```typescript
// Use data fetching hook
const { data, isLoading } = useQuery(...)

// Show loading/error states
if (isLoading) return <Loading />
if (error) return <Error />

// Render data
return <div>{data}</div>
```

## When Building Features

1. **Database first**
   - Design schema in Prisma
   - Create migrations
   - Set up indexes

2. **Backend second**
   - Create API endpoints
   - Implement validation
   - Add error handling
   - Write tests

3. **Frontend last**
   - Create types from API
   - Create components
   - Integrate with API
   - Add error handling

## Cursor Integration
When working in Cursor:
- Reference database schema: @prisma/schema.prisma
- Reference API routes: @app/api/
- Reference components: @components/
- Reference hooks: @hooks/
- Reference services: @services/

## Response Format
1. Show database changes (if any)
2. Show API endpoint changes
3. Show frontend component changes
4. Explain how they work together
5. Highlight integration points

Remember: All parts must work together. Check that:
- Database can store the data
- API returns correct shape
- Frontend handles response correctly
- Types align across all layers
```

---

## 3.2 Chain-of-Thought Prompting <a id="32-chain-of-thought"></a>

### Advanced Prompting Technique für Cursor

```markdown
# CHAIN-OF-THOUGHT PROMPTING

Diese Technik hilft Cursor, bessere Code-Entscheidungen zu treffen,
indem man den Denkprozess strukturiert.

## Struktur

### PROBLEM STATEMENT
Klar definieren, was zu lösen ist:
```
PROBLEM: Create a user authentication form with:
- Email and password fields
- Form validation
- Loading state
- Error handling
- Redirect on success
```

### CONSTRAINTS
Aufzählen, was beachtet werden muss:
```
CONSTRAINTS:
- Must integrate with NextAuth.js v5
- Must use React Hook Form
- Must use zod for validation
- Cannot add external dependencies
- Must follow project's Button and Input components
```

### DECISION POINTS
Die wichtigsten Entscheidungen aufzählen:
```
DECISION POINTS:
1. Form submission: Server Action vs. API Route?
2. Error display: Toast vs. inline messages?
3. Form state: React Hook Form vs. useState?
4. Loading state: Optimistic update vs. server response?
```

### ANALYSIS
Für jeden Decision Point analysieren:
```
DECISION 1: Form Submission
Option A: Server Action
  Pros: Direct backend access, less code, type-safe
  Cons: Not as flexible, less client-side control
  
Option B: API Route
  Pros: More control, easier testing, separation of concerns
  Cons: More code, less type-safe
  
DECISION: Use Server Action because we want simplicity
and tight integration with authentication.
```

### IMPLEMENTATION STEPS
Schritt-für-Schritt-Plan:
```
STEPS:
1. Create validation schema in lib/auth/validation.ts
2. Create Server Action in app/actions/auth.ts
3. Create UserAuthForm component
4. Integrate with existing Button/Input components
5. Add error handling and loading states
6. Create tests
7. Update documentation
```

### VERIFICATION
Checkliste zum Überprüfen:
```
VERIFICATION:
- [ ] Form renders correctly
- [ ] Validation works
- [ ] Errors display
- [ ] Loading state shows
- [ ] Success redirects
- [ ] Handles network errors
- [ ] Accessible (labels, ARIA)
- [ ] Tests pass
```

## Example: Chain-of-Thought Prompt for Cursor

```markdown
# TASK: Implement User Comment System

## PROBLEM
Users should be able to comment on posts with:
- Create new comment
- Edit own comment
- Delete own comment
- Show comment count
- Real-time updates

## CONSTRAINTS
- Must use existing Post and User models
- Cannot use real-time libraries (use polling)
- Must maintain data consistency
- Must prevent unauthorized access

## DECISION POINTS
1. Comment storage: Separate table vs. embedded array?
2. Real-time: Polling vs. WebSockets vs. Server-Sent Events?
3. Updates: Optimistic vs. pessimistic updates?
4. Caching: Query cache invalidation strategy?

## ANALYSIS
**Decision 1: Comment Storage**
Option A: Separate table (posts have many comments)
  ✓ Better for querying (pagination, sorting)
  ✓ Better for large comment counts
  ✓ Allows per-comment relationships
  ✓ Easier for real-time updates
  ✗ More complex queries
  
Option B: Embedded array
  ✓ Simple data model
  ✓ Single query to get post with comments
  ✗ Can't paginate efficiently
  ✗ Performance issues with many comments
  
→ DECISION: Use separate table

**Decision 2: Real-time Updates**
Option A: Polling (refetch every 3 seconds)
  ✓ Simple to implement
  ✓ Works with standard HTTP
  ✓ No new dependencies
  ✗ Wasteful (many unnecessary requests)
  ✗ Not truly real-time
  
Option B: WebSockets
  ✓ True real-time
  ✓ Efficient (only when data changes)
  ✗ More complex (new library needed)
  ✗ Harder to deploy/scale
  
Option C: Server-Sent Events
  ✓ Built on HTTP
  ✓ Real-time
  ✗ Limited browser support
  ✗ One-way communication
  
→ DECISION: Use polling with 3-second interval
(Balance between simplicity and UX)

**Decision 3: Update Strategy**
Option A: Optimistic
  ✓ Instant user feedback
  ✗ Need rollback on failure
  ✗ More complex state management
  
Option B: Pessimistic
  ✓ Always consistent with server
  ✓ Simpler logic
  ✗ Slower UX (wait for server response)
  
→ DECISION: Pessimistic (consistency > UX here)

## IMPLEMENTATION PLAN

### 1. Database Schema (prisma/schema.prisma)
```prisma
model Comment {
  id String @id @default(cuid())
  content String
  postId String
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  userId String
  user User @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([postId])
  @@index([userId])
}
```

### 2. Types (src/types/comment.ts)
- Comment type
- CommentInput type
- CommentResponse type

### 3. Validation (src/lib/comment/validation.ts)
- CreateCommentSchema
- UpdateCommentSchema

### 4. API Routes (src/app/api/posts/[id]/comments/)
- GET /api/posts/[id]/comments - List comments
- POST /api/posts/[id]/comments - Create comment
- PUT /api/posts/[id]/comments/[commentId] - Update comment
- DELETE /api/posts/[id]/comments/[commentId] - Delete comment

### 5. Service Layer (src/services/comment.service.ts)
- CommentService.getComments(postId, limit, offset)
- CommentService.createComment(data)
- CommentService.updateComment(id, data)
- CommentService.deleteComment(id)

### 6. Hook (src/hooks/useComments.ts)
- useComments(postId) - Fetch and manage comments
- Implements polling with useEffect
- Handles loading/error states

### 7. Components
- CommentList.tsx - Display all comments
- CommentItem.tsx - Single comment with edit/delete
- CommentForm.tsx - New comment form

### 8. Tests
- API route tests
- Service tests
- Component tests
- Hook tests

## VERIFICATION CHECKLIST
- [ ] Prisma schema compiles
- [ ] Migration runs successfully
- [ ] API routes return correct data
- [ ] Comments persist in database
- [ ] Users can't edit others' comments
- [ ] Polling updates comments correctly
- [ ] Delete removes from database
- [ ] Comment count updates
- [ ] Error states handled
- [ ] Loading states shown
- [ ] All tests pass
```

---

## 3.3 Iterative Refinement Workflows <a id="33-iterative"></a>

### Strukturierter Refinement-Prozess

```markdown
# ITERATIVE REFINEMENT WORKFLOW

Dieser Prozess hilft, Code schrittweise zu verbessern bis er perfect ist.

## ITERATION 1: Core Functionality
**Goal:** Get basic functionality working

Fragen für Cursor:
```
Create a basic [Component/Feature] that:
- Does X
- Does Y
- Does Z

Don't worry about:
- Perfekt performance
- Edge cases
- Extensive error handling
- TypeScript strict mode details

Focus on:
- Getting it working
- Clean structure
- Basic types
```

## ITERATION 2: Error Handling
**Goal:** Add comprehensive error handling

```
Now let's add error handling:
- Validate all inputs with zod
- Handle network errors
- Handle database errors
- Show user-friendly error messages
- Add error boundaries

Show all error scenarios covered.
```

## ITERATION 3: Type Safety
**Goal:** Ensure 100% type safety

```
Let's make this fully type-safe:
- Remove any implicit 'any' types
- Add return types to all functions
- Create proper interfaces
- Use type inference where possible
- Ensure TypeScript strict mode compliance

Run through TypeScript strict checks.
```

## ITERATION 4: Performance
**Goal:** Optimize performance

```
Now optimize for performance:
- Add React.memo where needed
- Optimize useEffect dependencies
- Add useCallback for functions
- Add useMemo for computations
- Implement code splitting if needed

Explain performance implications of each change.
```

## ITERATION 5: Testing
**Goal:** Add comprehensive tests

```
Let's add complete test coverage:
- Unit tests for utils
- Component tests for UI
- Integration tests for features
- Tests for error scenarios
- Tests for edge cases

Aim for 80%+ coverage.
```

## ITERATION 6: Accessibility
**Goal:** Ensure WCAG 2.2 compliance

```
Make this accessible:
- Add proper semantic HTML
- Add aria labels where needed
- Ensure keyboard navigation
- Check color contrast
- Test with screen readers

Verify WCAG 2.2 AA compliance.
```

## ITERATION 7: Documentation
**Goal:** Document everything

```
Add documentation:
- JSDoc comments for public APIs
- README for complex features
- Storybook stories for components
- Architecture explanation
- Usage examples

Make it clear to other developers.
```

## Example Workflow

### ITERATION 1: Basic Form
```
Create a simple login form with:
- Email input
- Password input
- Submit button
- Basic submit handler

Don't worry about validation or error handling yet.
```

### ITERATION 2: Add Validation
```
Now add validation:
- Use React Hook Form
- Use zod for schema
- Show validation errors inline
- Disable submit when invalid

Reference the validation schema template.
```

### ITERATION 3: Add API Integration
```
Integrate with login API:
- Call /api/auth/login on submit
- Show loading state
- Handle API errors
- Show error messages
- Redirect on success
```

### ITERATION 4: Add Loading States
```
Improve user feedback:
- Show loading spinner on submit button
- Disable form while loading
- Show clear error messages
- Show success message before redirect
```

### ITERATION 5: Optimize
```
Optimize the form:
- Memoize child components
- Optimize re-renders
- Use proper dependency arrays
- Check network tab for waste
```

### ITERATION 6: Add Tests
```
Test the form thoroughly:
- Test rendering
- Test form submission
- Test validation errors
- Test API errors
- Test loading states
- Test success flow
```

### ITERATION 7: Document
```
Document the form:
- JSDoc comment explaining usage
- Storybook stories for different states
- Example usage in code
- List of props and their types
```

## Benefits of This Approach

✅ **Incremental Improvement** - Each iteration adds value
✅ **Testing at Each Step** - Easier to find issues
✅ **Clear Progress** - See what's done vs. what's left
✅ **Flexible** - Can skip iterations if not needed
✅ **Sustainable** - Doesn't get overwhelming
✅ **Quality** - Forces thinking about each aspect
```

---

## 3.4 Error Recovery & Debugging Prompts <a id="34-error-recovery"></a>

### Struktur für Error-Debugging mit Cursor

```markdown
# ERROR RECOVERY WORKFLOW

Wenn Code nicht funktioniert, dieser Prozess hilft, Problem systematisch
zu finden und zu fixen.

## ERROR DIAGNOSIS TEMPLATE

Nutzer sollte folgende Info zu Cursor geben:

```
# ERROR: [Error Type]

## Error Message
[Full error message from console/terminal]

## Code That's Failing
[Code snippet that causes error]

## Expected Behavior
[What should happen]

## Actual Behavior
[What's happening instead]

## Context
- Framework/Library versions:
  - React: X
  - Next.js: X
  - TypeScript: X
- File path: src/...
- Related files: [List files involved]

## What I've Tried
1. [What was tried]
2. [What was tried]

## Questions
1. [What's unclear]
2. [What's unclear]
```

## Example Error Debugging

```markdown
# ERROR: TypeScript Error on Component Props

## Error Message
```
Type '{}' is not assignable to type 'UserProps'
Property 'id' is missing in type '{}' but required in 'UserProps'
```

## Code That's Failing
```tsx
export interface UserProps {
  id: string
  name: string
}

export const UserCard: React.FC<UserProps> = ({ id, name }) => {
  return <div>{name}</div>
}

// In parent component
<UserCard /> // ← Error here
```

## Expected Behavior
Component should accept UserProps or have defaults

## Actual Behavior
TypeScript requires both id and name props

## Solution Strategy
1. Check if props should be required or optional
2. If optional, add ? to interface
3. If required, provide props when using component
4. Or add default values

## Fixed Code
```tsx
// Option 1: Make optional
export interface UserProps {
  id?: string
  name?: string
}

// Option 2: Add defaults
export const UserCard: React.FC<UserProps> = ({ 
  id = 'unknown', 
  name = 'Unknown' 
}) => {
  return <div>{name}</div>
}

// Option 3: Use when calling
<UserCard id="1" name="John" />
```
```

## Common Error Patterns

### Pattern 1: Type Mismatch
**Symptoms:** "Type X is not assignable to type Y"
**Solution:** Check type definitions, ensure they match
**Cursor Prompt:**
```
I'm getting a type mismatch error. 
Here's the interface: [show interface]
Here's how I'm using it: [show usage]
Why doesn't it match? Can you fix it?
```

### Pattern 2: Missing Dependency in Hook
**Symptoms:** Missing dependencies warning or unexpected behavior
**Solution:** Add missing values to dependency array
**Cursor Prompt:**
```
This useEffect is triggering too often.
Here's the code: [show hook]
What's missing from dependencies?
```

### Pattern 3: Import Error
**Symptoms:** "Cannot find module" or "X is not exported"
**Solution:** Check export vs. import paths
**Cursor Prompt:**
```
I'm getting "Cannot find module" error.
I'm trying to import from: [path]
File exists at: [path]
Why can't it find it?
```

### Pattern 4: Async/Await Issue
**Symptoms:** "Promise not awaited" or unexpected async behavior
**Solution:** Properly handle promises
**Cursor Prompt:**
```
This async operation isn't working as expected.
Code: [show code]
I expect: [what should happen]
I get: [what happens]
What's wrong?
```

## Debugging Checklist

When code isn't working:

✅ **Check Error Message**
- Is it TypeScript error?
- Is it runtime error?
- Is it logic error?

✅ **Check Types**
- Are types exported?
- Do imports match?
- Are all required props provided?

✅ **Check Imports**
- Does import path exist?
- Is file exported?
- Is barrel export updated?

✅ **Check Async**
- Are promises awaited?
- Do dependencies include everything used?
- Is effect cleanup correct?

✅ **Check Logic**
- Does algorithm work?
- Are conditions correct?
- Are there off-by-one errors?

✅ **Check State**
- Is initial state correct?
- Are updates correct?
- Is state being reset?

## Cursor Commands for Debugging

```
# When TypeScript is confused
@tsconfig.json - show configuration

# When imports fail
@path/to/file.ts - show what's exported

# When hook behaves wrong
@hooks/useWhatever.ts - review dependency array

# When component doesn't render
@components/ComponentName.tsx - review render logic

# When API fails
@app/api/route/route.ts - review endpoint

# When types don't match
@types/index.ts - review all type exports
```

## Recovery Workflow

**STEP 1: Isolate**
- Create minimal reproduction
- Remove unrelated code
- Focus on one error at a time

**STEP 2: Diagnose**
- Read full error message
- Check file where error occurs
- Check imports and types
- Check variable definitions

**STEP 3: Fix**
- Make one small change
- Test if it works
- If not, try different approach
- Ask Cursor for help if stuck

**STEP 4: Verify**
- Test original problem
- Check related code
- Run tests if available
- Check TypeScript compiler

**STEP 5: Document**
- Note what caused error
- Note how it was fixed
- Update .cursorrules if pattern new
- Learn for future projects
```

---

# TEIL 4: PROJEKTTYP-SPEZIFISCHE VORLAGEN

## 4.1 React/Next.js Projekte <a id="41-react-nextjs"></a>

### Complete Next.js Project Setup Prompt

```markdown
# SETUP: Complete Next.js Dashboard Application

Use this prompt to initialize complete project with Cursor.

## CONTEXT
You are setting up a production-grade Next.js dashboard application.
The application will have:
- User authentication with NextAuth.js
- Role-based access control
- Real-time data visualization
- Responsive design
- TypeScript strict mode
- Comprehensive testing

## TECH STACK
- Frontend: React 18 + Next.js 14 (App Router)
- Language: TypeScript 5.3 (strict mode)
- Styling: Tailwind CSS v4
- State: TanStack Query v5 + Zustand v4
- Forms: React Hook Form + Zod
- Database: PostgreSQL + Prisma v5
- Auth: NextAuth.js v5
- Testing: Vitest + React Testing Library
- Deployment: Vercel

## PROJECT STRUCTURE
Create the following folder structure:

```
my-dashboard/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── LoginPage.test.tsx
│   │   │   └── register/
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   ├── settings/
│   │   │   └── profile/
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...]auth.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   └── data/
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── DashboardGrid.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── user/
│   │   │       ├── UserProfile.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layouts/
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── AuthLayout.tsx
│   │   │
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── auth/
│   │   │   ├── validation.ts
│   │   │   └── config.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   └── format.ts
│   │   │
│   │   └── constants/
│   │       └── config.ts
│   │
│   ├── types/
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   │
│   └── middleware.ts
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
├── tests/
├── .env.example
├── .cursorrules
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── package.json
└── README.md
```

## STEP 1: Initialize Project

Run:
```bash
npx create-next-app@latest my-dashboard --typescript --tailwind
cd my-dashboard
```

## STEP 2: Install Dependencies

```bash
npm install \
  react-hook-form zod \
  @tanstack/react-query zustand \
  next-auth @prisma/client prisma \
  @testing-library/react @testing-library/jest-dom vitest
```

## STEP 3: Setup Files

Create the following key files:

### .cursorrules
[Reference TEIL 2.1 complete .cursorrules]

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"],
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
}
```

### prisma/schema.prisma
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    String     @id @default(cuid())
  email String     @unique
  name  String?
  password String? // hashed
  role  String     @default("user")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
}
```

## STEP 4: Create Core Components

When ready, ask Cursor to create:
1. Base UI components (Button, Input, Card)
2. Authentication form
3. Dashboard layout
4. Dashboard page

## STEP 5: Setup Authentication

When ready, ask Cursor to:
1. Configure NextAuth.js
2. Create authentication routes
3. Create useAuth hook
4. Protect dashboard routes

## STEP 6: Setup Database

When ready:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## INSTRUCTIONS FOR CURSOR

Use these prompts with Cursor to build out the application:

### Prompt 1: Create Base Components
```
Create the base UI components directory with:
- Button.tsx (primary, secondary, outline variants)
- Input.tsx (with error states)
- Card.tsx (with header, body, footer)
- Badge.tsx

Use TypeScript interfaces for props.
Use Tailwind CSS for styling.
Export from components/ui/index.ts
```

### Prompt 2: Create Authentication System
```
Create complete auth system with:
1. src/types/auth.ts - Type definitions
2. src/lib/auth/validation.ts - zod schemas
3. src/services/auth.service.ts - Business logic
4. src/app/api/auth/login/route.ts - Login endpoint
5. src/hooks/useAuth.ts - Auth hook
6. src/components/features/auth/LoginForm.tsx - Login component

Follow the patterns in .cursorrules
```

[Continue with more prompts...]
```

---

## 4.2 Full-Stack Applikationen <a id="42-fullstack"></a>

```markdown
# TEMPLATE: Full-Stack Application with Database

Complete template for building full-stack apps with database integration.

[Detailliertes Template - ähnlich wie 4.1]
```

---

## 4.3 Design System Implementierung <a id="43-design-system"></a>

```markdown
# TEMPLATE: Design System Implementation

Template for creating design systems with component libraries.

[Detailliertes Template]
```

---

## 4.4 AI-Integration & Automation <a id="44-ai-integration"></a>

```markdown
# TEMPLATE: AI-Powered Features Integration

Template for integrating AI features (Gemini, OpenAI, Claude) into Next.js apps.

[Detailliertes Template]
```

---

# TEIL 5: CURSOR-WORKFLOW PATTERNS

## 5.1 Parallel File Generation <a id="51-parallel"></a>

```markdown
# PARALLEL FILE GENERATION WORKFLOW

Wie man mehrere zusammenhängende Dateien gleichzeitig mit Cursor erstellt.

## TECHNIQUE: Coordinated Multi-File Prompts

**Problem:** Cursor erstellt Dateien manchmal isoliert

**Solution:** One master prompt mit klaren Dependencies

### Master Prompt Template

```markdown
# TASK: Create [Feature Name] System (Coordinated)

## Deliverables
Create the following files in this order:

### 1. Types & Interfaces
**File:** src/types/[feature].ts
**Contents:**
- [Interface1]
- [Interface2]
- [Type1]

### 2. Validation Schema
**File:** src/lib/[feature]/validation.ts
**Depends on:** Types from step 1
**Contents:**
- [ZodSchema1]
- [ZodSchema2]

### 3. API Routes
**File:** src/app/api/[feature]/route.ts
**Depends on:** Validation from step 2
**Contents:**
- POST handler with validation
- Proper error handling
- Type-safe responses

### 4. Custom Hooks
**File:** src/hooks/use[Feature].ts
**Depends on:** API routes from step 3
**Contents:**
- useQuery for fetching
- useMutation for mutations
- Error handling

### 5. Components
**Files:**
- src/components/ui/[Component1].tsx
- src/components/features/[feature]/[Component2].tsx
**Depends on:** Hooks from step 4
**Contents:**
- Functional components
- TypeScript interfaces
- Proper prop types

## Integration Points
Show how each file connects to others:
```
types/*.ts
    ↓ (used by)
lib/*/validation.ts
    ↓ (used by)
app/api/*/route.ts
    ↓ (called by)
hooks/use*.ts
    ↓ (used by)
components/*/Component.tsx
```

## Verification Checklist
After all files created:
- [ ] All imports resolve
- [ ] No circular dependencies
- [ ] Types match across files
- [ ] Exports in barrel files
- [ ] Tests create-able
```

### Example: Parallel Comment System

```
# TASK: Create Comment System (Full Stack)

## Files to Create

### 1. Types
**File:** src/types/comment.ts
```tsx
export interface Comment {
  id: string
  content: string
  postId: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export type CreateCommentInput = Pick<Comment, 'content'>
export type CommentResponse = Comment
```

### 2. Validation
**File:** src/lib/comment/validation.ts
```tsx
import { z } from 'zod'

export const createCommentSchema = z.object({
  content: z.string().min(1).max(1000),
  postId: z.string()
})

export type CreateCommentInput = z.infer<typeof createCommentSchema>
```

### 3. API Route
**File:** src/app/api/posts/[postId]/comments/route.ts
```tsx
import { NextRequest, NextResponse } from 'next/server'
import { createCommentSchema } from '@/lib/comment/validation'
import { CommentService } from '@/services/comment.service'

export async function POST(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const body = await request.json()
    const data = createCommentSchema.parse({
      ...body,
      postId: params.postId
    })
    
    const comment = await CommentService.create(data)
    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    // Error handling
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }
}
```

### 4. Hook
**File:** src/hooks/useComments.ts
```tsx
import { useQuery, useMutation } from '@tanstack/react-query'
import { Comment, CreateCommentInput } from '@/types/comment'

export function useComments(postId: string) {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const res = await fetch(`/api/posts/${postId}/comments`)
      return res.json() as Promise<Comment[]>
    }
  })
}

export function useCreateComment() {
  return useMutation({
    mutationFn: async (data: CreateCommentInput) => {
      const res = await fetch(
        `/api/posts/${data.postId}/comments`,
        { method: 'POST', body: JSON.stringify(data) }
      )
      return res.json() as Promise<Comment>
    }
  })
}
```

### 5. Components
**File:** src/components/features/comment/CommentForm.tsx
```tsx
import { useCreateComment } from '@/hooks/useComments'
import { CreateCommentInput } from '@/types/comment'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface CommentFormProps {
  postId: string
  onSuccess?: () => void
}

export function CommentForm({ postId, onSuccess }: CommentFormProps) {
  const mutation = useCreateComment()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form handling
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Add a comment..." />
      <Button type="submit" loading={mutation.isPending}>
        Post Comment
      </Button>
    </form>
  )
}
```

## Integration Check
✓ Types defined
✓ Validation uses types
✓ API uses validation
✓ Hook calls API
✓ Component uses hook
✓ All imports resolve
✓ No circular deps
✓ Ready for tests
```

---

## 5.2 Automated Testing Prompts <a id="52-testing"></a>

```markdown
# TESTING AUTOMATION WITH CURSOR

Wie man Cursor für Test-Generierung nutzt.

## Test Coverage Strategy

### LEVEL 1: Unit Tests (Utilities)
```
# PROMPT: Create unit tests for utility functions

For the following utility files, create comprehensive tests:
- src/lib/utils/format.ts
- src/lib/utils/validate.ts
- src/lib/auth/validation.ts

Requirements:
- Test happy paths
- Test error cases
- Test edge cases
- Use vitest + expect
- Aim for 100% coverage
- Separate test file with *.test.ts naming

Example structure:
```tsx
describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('January 15, 2024')
  })
  
  it('should handle invalid date', () => {
    expect(() => formatDate(new Date('invalid'))).toThrow()
  })
})
```
```

### LEVEL 2: Component Tests
```
# PROMPT: Create component tests

For these components, create tests:
- src/components/ui/Button.tsx
- src/components/ui/Input.tsx
- src/components/features/auth/LoginForm.tsx

Requirements:
- Test rendering
- Test user interactions (click, type)
- Test prop variations
- Test error states
- Test accessibility

Use React Testing Library with:
- semantic queries (getByRole, getByLabelText)
- user events (not fireEvent)
- accessibility checks
```

### LEVEL 3: Integration Tests
```
# PROMPT: Create integration tests

Test these integrated flows:
1. User login flow
2. Comment creation flow
3. Data fetch + display flow

Requirements:
- Mock API calls
- Test user interactions
- Test success paths
- Test error handling
- Test loading states
```

### LEVEL 4: E2E Tests
```
# PROMPT: Create E2E tests

Create Playwright/Cypress tests for:
1. User registration → Login → Dashboard access
2. Create post → Add comment → See comment
3. Edit profile → Verify changes persisted

Requirements:
- Real browser automation
- Test complete user journeys
- Include error scenarios
- Test on different screen sizes
```

## Automated Test Command

```bash
# Run all tests with coverage
npm test -- --coverage

# Expected output:
# ✓ 150+ tests passing
# ✓ 80%+ coverage
# ✓ 0 warnings
```
```

---

## 5.3 Documentation Generation <a id="53-docs"></a>

```markdown
# DOCUMENTATION GENERATION

Wie man Cursor nutzt, um Dokumentation zu generieren.

## Documentation Types

### 1. JSDoc Comments
```
# PROMPT: Add JSDoc comments to all exported functions

For each exported function in:
- src/lib/utils/*.ts
- src/services/*.ts
- src/hooks/use*.ts

Add JSDoc comments with:
- Brief description
- @param for each parameter
- @returns description
- @example with usage
- @throws for errors
```

### 2. README Files
```
# PROMPT: Create README for [folder]

Create README.md for src/components/ with:
- Overview of component structure
- How to create new components
- Component guidelines
- Usage examples
- Common patterns
```

### 3. API Documentation
```
# PROMPT: Document API endpoints

For each API route in src/app/api/, create documentation:
- Endpoint path and method
- Request body schema
- Response schema
- Error responses
- Authentication required
- Example request/response
```

### 4. Storybook Stories
```
# PROMPT: Create Storybook stories

For these components, create stories:
- src/components/ui/Button.tsx
- src/components/ui/Input.tsx
- src/components/features/auth/LoginForm.tsx

Requirements:
- Story for each variant
- Story for each state
- Story with usage example
- Story with props documentation
```

### 5. Architecture Documentation
```
# PROMPT: Create ARCHITECTURE.md

Document the system architecture:
- High-level overview
- Data flow diagram (in ASCII)
- Folder structure explanation
- Key patterns used
- Technology decisions and why
- Deployment diagram
```
```

---

## 5.4 Type Safety & Validation <a id="54-types"></a>

```markdown
# TYPE SAFETY & VALIDATION AUTOMATION

Wie man Cursor einsetzt für Type-Sicherheit.

## Full Type Inference

```
# PROMPT: Implement strict TypeScript throughout

For all files in src/:
1. Remove all 'any' types
2. Add explicit return types to functions
3. Create interfaces for all object shapes
4. Use type inference with 'satisfies'
5. Ensure strict mode compliance

Check:
- npx tsc --noEmit (should have 0 errors)
- Run type checker in IDE
```

## API Type Safety

```
# PROMPT: Create type-safe API layer

Create fully type-safe API client:
- Define Request/Response types
- Validate responses at runtime with zod
- Type API functions
- Handle error types
- Auto-complete API endpoints

Result: No manual type casting needed
```

## Database Type Inference

```
# PROMPT: Leverage Prisma for types

Ensure database types used everywhere:
- Import from @prisma/client
- Use z.infer for zod + database types
- Type API responses from database
- Type component props from data

Result: Changes to schema auto-update types
```
```

---

# TEIL 6: INTEGRATION MIT GEMINI GEM

## Wie dein Gemini Gem diese Dokumentation nutzt

```markdown
# GEMINI GEM SYSTEM PROMPT

Dieser Prompt wird in deinen Gemini Gem geladen,
damit er automatisch Cursor-optimierte Konzepte generiert.

---

You are a Web Development Project Architect and Cursor Integration Specialist.
Your role is to help create comprehensive project concepts and automation 
blueprints for web development projects that will be implemented in Cursor.

## Your Expertise

You specialize in:
- Analyzing project requirements
- Creating detailed project architectures
- Generating .cursorrules files
- Creating step-by-step Cursor prompts
- Designing system prompts for specific projects
- Creating component hierarchies
- Planning data flows
- Defining API structures

## When User Asks You To "Create a Concept"

1. **Understand Requirements**
   - Ask clarifying questions if needed
   - Understand project scope
   - Identify tech stack preferences

2. **Create Architecture**
   - Define folder structure
   - Plan component hierarchy
   - Plan data flow
   - Define API endpoints
   - Create database schema

3. **Generate .cursorrules**
   - Project-specific patterns
   - Custom code styles
   - Naming conventions
   - Error handling patterns

4. **Create Cursor Prompts**
   - Step-by-step setup
   - Component generation
   - Feature implementation
   - Testing strategy

5. **Create System Prompts**
   - Project-specific guidelines
   - Code quality rules
   - Architecture patterns
   - Best practices

## Output Format

When creating a concept, provide:

### 1. Project Overview
```
Project Name: [Name]
Type: [React/Full-Stack/etc]
Tech Stack: [List technologies]
Main Features: [List features]
```

### 2. Architecture Diagram
```
ASCII diagram showing:
- Folder structure
- Component hierarchy
- Data flow
- API structure
```

### 3. .cursorrules
```yaml
[Complete .cursorrules file]
```

### 4. Setup Steps
```markdown
Step-by-step guide to:
- Initialize project
- Create folder structure
- Install dependencies
- Create key files
```

### 5. Cursor Prompt Sequence
```markdown
Prompt 1: [First thing to build]
Prompt 2: [Second thing to build]
...
```

### 6. System Prompt
```markdown
[Project-specific system prompt for Cursor]
```

## Example Interaction

**User:** "I want to create a real-time collaborative notes app"

**Your Response:**

```markdown
# PROJECT: Real-Time Collaborative Notes App

## Overview
- Type: Full-Stack Web Application
- Tech: Next.js + PostgreSQL + WebSockets
- Features: 
  - Real-time note editing
  - Collaboration with multiple users
  - Rich text editor
  - User authentication
  - Sharing & permissions

## Architecture

### Database Schema
```
User {
  id, email, name, ...
}

Note {
  id, title, content, userId, createdAt, updatedAt
}

NoteCollaborator {
  noteId, userId, role, addedAt
}

NoteVersion {
  id, noteId, content, userId, createdAt
}
```

### Folder Structure
```
src/
├── app/
│   ├── api/
│   │   ├── notes/       # CRUD operations
│   │   ├── collaborate/ # Real-time updates
│   │   └── users/       # User management
│   └── notes/           # Note pages
├── components/
│   ├── ui/
│   │   ├── Editor.tsx   # Rich text editor
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── features/
│   │   ├── note/
│   │   │   ├── NoteEditor.tsx
│   │   │   ├── NoteList.tsx
│   │   │   ├── CollaboratorsList.tsx
│   │   │   └── ShareDialog.tsx
│   │   └── auth/
│   │       └── LoginForm.tsx
├── hooks/
│   ├── useNote.ts
│   ├── useCollaborators.ts
│   └── useRealtimeUpdates.ts
├── services/
│   ├── note.service.ts
│   └── auth.service.ts
├── types/
│   ├── note.ts
│   ├── user.ts
│   └── collaboration.ts
└── lib/
    ├── api/
    ├── auth/
    └── websocket/
```

### Component Hierarchy
```
App
├── RootLayout
│   ├── Navigation
│   └── MainContent
│       ├── NotesList
│       │   ├── NoteCard (repeated)
│       │   └── CreateNoteButton
│       │
│       ├── NoteEditor
│       │   ├── EditorHeader
│       │   │   ├── NoteTitle
│       │   │   ├── CollaboratorsList
│       │   │   └── ShareButton
│       │   │
│       │   └── RichEditor
│       │       ├── Toolbar
│       │       └── EditorArea
│       │
│       └── Sidebar
│           ├── RecentNotes
│           └── Collaborators
```

### Data Flow
```
Client: User types in editor
    ↓
useRealtimeUpdates hook
    ↓
WebSocket to server
    ↓
Server: Validate + Save to DB
    ↓
Broadcast to other clients
    ↓
All clients: Update in real-time
```

## Complete .cursorrules
[Insert full .cursorrules file here]

## Setup Steps

### Step 1: Initialize
```bash
npx create-next-app@latest notes-app
cd notes-app
npm install react-hook-form zod socket.io-client
```

### Step 2: Create Folder Structure
[Commands to create folders]

### Step 3: Setup Database
[Prisma setup steps]

### Step 4: Create Files
[List of key files to create]

## Cursor Prompts

### Prompt 1: Authentication System
[Full prompt for setting up auth]

### Prompt 2: Note CRUD
[Full prompt for creating notes system]

### Prompt 3: Real-Time Collaboration
[Full prompt for websocket integration]

### Prompt 4: Rich Text Editor
[Full prompt for editor component]

### Prompt 5: Sharing & Permissions
[Full prompt for sharing feature]

## System Prompt for Cursor
[Complete system prompt for this project]
```

## Rules

When creating concepts:

✅ Be specific about tech stack
✅ Provide complete folder structures
✅ Include database schema
✅ Show component hierarchies
✅ Explain data flows
✅ Create detailed .cursorrules
✅ Write step-by-step setup
✅ Sequence Cursor prompts logically
✅ Provide system prompts
✅ Include testing strategy

❌ Don't be vague
❌ Don't assume tech stack
❌ Don't skip architecture
❌ Don't assume file structure
❌ Don't forget types
❌ Don't skip .cursorrules
❌ Don't miss error handling
❌ Don't forget tests
❌ Don't assume user knowledge
```

---

# ABSCHLUSS: WORKFLOW ZUSAMMENFASSUNG

## Dein Kompletter Workflow

### 1. **Gemini Gem nutzen** (Konzeption)
   - Beantworte deine Anfrage mit Konzept
   - Generiere Projektarchitektur
   - Erstelle .cursorrules
   - Generiere Cursor-Prompts
   - Erstelle System Prompts

### 2. **Cursor nutzen** (Implementierung)
   - Importiere .cursorrules
   - Folge Prompt-Sequenz
   - Baue Feature um Feature
   - Cursor generiert Code
   - Du reviewst & iterierst

### 3. **Iterieren**
   - Cursor schlägt Verbesserungen vor
   - Du fragst nach Änderungen
   - Cursor implementiert
   - Cycle repeats bis fertig

## Dieser Guide enthält alles, was du brauchst, um:
✓ Best practices für Cursor zu verstehen
✓ Effektive .cursorrules zu schreiben
✓ Gute Prompts zu strukturieren
✓ Projekte mit Cursor zu organisieren
✓ Automatisierung zu maximieren
✓ Code Quality zu sichern
✓ Dokumentation zu generieren
✓ Tests zu schreiben
✓ Zusammenhängende Features zu bauen

---

**Gemini Gem wird diesen Guide nutzen, um:**
- Strukturierte Projekt-Konzepte zu erstellen
- Maßgeschneiderte .cursorrules zu generieren
- Sequenzierte Cursor-Prompts zu schreiben
- System Prompts für dein Projekt zu erstellen
- Best Practices automatisch einzubauen
- Konsistente, produktionsreife Code-Struktur zu sichern

**Viel Erfolg mit deinem Workflow! 🚀**
