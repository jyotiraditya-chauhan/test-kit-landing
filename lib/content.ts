export const site = {
  name: "Test-kit",
  pluginName: "testing-suite",
  version: "2.0.0",
  license: "MIT",
  repoUrl: "https://github.com/jyotiraditya-chauhan/test-kit",
  repoReadmeUrl: "https://github.com/jyotiraditya-chauhan/test-kit#readme",
  repoLicenseUrl:
    "https://github.com/jyotiraditya-chauhan/test-kit/blob/main/LICENSE",
} as const;

export const metadata = {
  title: "Test-kit: stack-aware test writing for Claude Code",
  description:
    "A Claude Code plugin that writes unit, widget, golden, and integration tests for Flutter, React, Next.js, Swift, and Node/Express, matched to your project's own conventions, with an opt-in fault-injection check that proves the tests actually catch bugs.",
} as const;

export const nav = {
  links: [
    { label: "Why", href: "#why" },
    { label: "Skills", href: "#skills" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Install", href: "#install" },
  ],
  installCta: { label: "Install", href: "#install" },
} as const;

export const hero = {
  headline: "Test-kit",
  subhead: "A Claude Code plugin marketplace for stack-aware test writing.",
  supportingLine:
    "Five platform skills that detect your project's real stack, ask before assuming what to test, and write tests that match your own conventions. Flutter, React, Next.js, Swift, and Node/Express.",
  badges: ["License: MIT", "Claude Code Plugin", "Version 2.0.0", "5 Skills"],
  primaryCta: { label: "Get started", href: "#install" },
  secondaryCta: { label: "Star on GitHub", href: site.repoUrl },
} as const;

export const why = {
  paragraphs: [
    "AI-written tests fail in a specific, well-documented way, and it isn't because the model can't code. A controlled study comparing agent-generated tests to human-written ones found agents genuinely better at edge-case breadth: nearly double the boundary-condition variety of human authors. But they were measurably weaker on precision. 11.58% of agent-written assertions were ambiguous or effectively unclassifiable, against 1.46% for humans, and agent-generated suites carried a higher flakiness-candidate rate (0.41 vs 0.30), mostly from non-deterministic file I/O and timing assumptions a human author would instinctively avoid.",
    "The sharper problem doesn't show up on a coverage dashboard. Left alone, an agent tends to write the implementation first, then write tests that confirm what that implementation already does, not what it should do. A test built this way can hit 100% line coverage while asserting nothing. A 2026 SmartBear survey of 273 software leaders found 70% already see application quality degrading as AI accelerates development. Separately, 58% of developers say they trust AI-generated output without testing it at all.",
  ],
  stats: [
    { value: "~2x", label: "edge-case variety vs. human authors" },
    { value: "11.58% vs 1.46%", label: "ambiguous assertions, agent vs. human" },
    { value: "0.41 vs 0.30", label: "flakiness-candidate rate, agent vs. human" },
    { value: "70%", label: "of leaders see quality degrade as AI accelerates dev" },
  ],
} as const;

export const capabilities = {
  intro:
    "Writing correct test files is the deliverable. Running and verifying them is available on request, never automatic.",
  does: [
    "Writes unit, widget, component, golden/snapshot, and integration tests",
    "Match your existing test framework, mocking library, and file conventions",
    "Ask which layer and scope before generating anything",
    "Run and verify tests when you ask it to",
  ],
  doesnt: [
    "Run your CI pipeline or lint your codebase",
    "Silently rewrite or delete your existing tests",
    'Assume "test everything" or "test just this file"',
    "Run flutter test / npm test / xcodebuild on its own",
  ],
} as const;

export const skills = {
  items: [
    {
      id: "flutter-testing",
      command: "/testing-suite:flutter-testing",
      firesOn: "pubspec.yaml with a flutter: SDK dependency",
      tooling: [
        "flutter_test",
        "mocktail",
        "bloc_test / ProviderContainer",
        "golden_toolkit",
        "integration_test / Patrol",
      ],
      badge: "Most in-depth",
      note: "Gets the deepest coverage of the five skills. Unit, widget, golden, and integration tests are each first-class, with their own dedicated reference docs, not folded into a generic \"widget testing\" default.",
    },
    {
      id: "react-testing",
      command: "/testing-suite:react-testing",
      firesOn: "package.json with react + react-dom, no next",
      tooling: ["Vitest / Jest", "React Testing Library", "MSW"],
    },
    {
      id: "nextjs-testing",
      command: "/testing-suite:nextjs-testing",
      firesOn: "package.json with next",
      tooling: [
        "Vitest (Server Actions, sync components)",
        "Playwright (async Server Components, auth, checkout)",
      ],
    },
    {
      id: "swift-testing",
      command: "/testing-suite:swift-testing",
      firesOn: ".xcodeproj / .xcworkspace / Package.swift",
      tooling: [
        "Swift Testing (@Test / #expect)",
        "XCTest where it already exists",
        "swift-snapshot-testing",
      ],
    },
    {
      id: "node-testing",
      command: "/testing-suite:node-testing",
      firesOn: "package.json with express / fastify / koa / @nestjs/core",
      tooling: [
        "Supertest against the app instance",
        "Vitest / Jest",
        "testcontainers",
      ],
    },
  ],
  subNote:
    "No two skills can plausibly fire on the same request. Each one hard-fails and points to the correct sibling skill if it detects the wrong stack.",
  flutterLayers: [
    {
      layer: "Unit",
      purpose: "Pure Dart logic: services, repositories, formatters, validators. No widget tree.",
      tooling: "package:test, mocktail",
    },
    {
      layer: "Widget",
      purpose: "A single widget or small tree: rendering, interaction, layout.",
      tooling: "flutter_test, WidgetTester",
    },
    {
      layer: "Golden",
      purpose: "Pixel-level visual regression for small, stable design-system components.",
      tooling: "golden_toolkit / alchemist",
    },
    {
      layer: "Integration",
      purpose: "Full app on a real device or emulator, Flutter's closest thing to E2E. Reserved for critical flows.",
      tooling: "integration_test, Patrol for native-OS interactions",
    },
  ],
} as const;

export const howItWorks = {
  steps: [
    {
      n: 1,
      title: "Detect the stack",
      description:
        "Fingerprints the project's manifest and existing test tooling. An existing convention always wins over the skill's own default.",
    },
    {
      n: 2,
      title: "Audit the project",
      description:
        "Classifies target code as pure logic, UI, or data-access, matches existing naming, flags critical paths (auth, payment, data-writes).",
    },
    {
      n: 3,
      title: "Ask, don't assume",
      description:
        "One message, two questions: which layer to test, and what scope. Never inferred silently.",
    },
    {
      n: 4,
      title: "State the plan",
      description:
        "What's in scope, what's mocked vs real, and the specific edge cases, before any code exists.",
    },
    {
      n: 5,
      title: "Generate",
      description:
        "AAA-structured tests, boundary-only mocking, matching the project's existing style, with minimal comments.",
    },
    {
      n: 6,
      title: "Report, then offer",
      description:
        "Lists what was written and what each test covers. Nothing is run yet, and nothing is claimed to pass or fail. Offers to run and verify.",
    },
    {
      n: 7,
      title: "Only if asked, run and verify",
      description:
        "Runs the tests, then runs the mandatory fault-injection self-check on business-logic tests, and reports honestly what's covered.",
    },
  ],
  callout: "Step 6 is where most requests end, and that's by design.",
} as const;

export const faultInjection = {
  steps: [
    { n: 1, description: "Run the new test against the real implementation. Confirm it's green." },
    {
      n: 2,
      description:
        "Deliberately introduce one small, obvious fault (flip a comparison operator, swap a returned literal, skip a guard branch).",
    },
    { n: 3, description: "Re-run the same test. It must now fail." },
    {
      n: 4,
      description:
        "If it still passes against broken code, the test is flagged as weak and rewritten. It's never silently counted as passing coverage.",
    },
    {
      n: 5,
      description:
        "Revert the fault. Confirm the test is green again against the real implementation.",
    },
  ],
  verifiedCallout:
    "Verified for real, not just described. In a live end-to-end run against a Node/Express fixture, the skill generated a `calculateShippingCost` test suite, ran the fault-injection check on request, and reverted cleanly. The implementation file came back byte-identical to its original, and every generated assertion checked an exact value (`toBe`, `toBeCloseTo`, a specific thrown message), not just that a call didn't throw.",
} as const;

export const workedExample = {
  prompt:
    "Add tests for the calculateShippingCost function in src/services/shipping.js, it's pure logic.",
  filename: "src/services/shipping.test.js",
  code: `import { describe, it, expect } from 'vitest';
import { calculateShippingCost } from './shipping.js';

describe('calculateShippingCost', () => {
  it('calculates standard cost as weight * 2.5', () => {
    expect(calculateShippingCost(1)).toBe(2.5);
    expect(calculateShippingCost(4)).toBe(10);
  });
  it('applies a 1.5x multiplier when expedited', () => {
    expect(calculateShippingCost(4, true)).toBe(15);
  });
  it('defaults to standard (non-expedited) when the flag is omitted', () => {
    expect(calculateShippingCost(2)).toBe(calculateShippingCost(2, false));
  });
  it('handles fractional weights', () => {
    expect(calculateShippingCost(0.5)).toBeCloseTo(1.25);
  });
  it('throws when weight is zero', () => {
    expect(() => calculateShippingCost(0)).toThrow('weight must be positive');
  });
  it('throws when weight is negative', () => {
    expect(() => calculateShippingCost(-3)).toThrow('weight must be positive');
  });
});`,
  response:
    "Wrote `src/services/shipping.test.js` with 6 cases: standard cost, expedited multiplier, default-flag equivalence, fractional weight, and both zero and negative error paths. Not run yet. Want me to run these and verify them before you review them?",
} as const;

export const install = {
  interactive: `/plugin marketplace add jyotiraditya-chauhan/test-kit
/plugin install testing-suite@test-kit-marketplace`,
  nonInteractive: `claude plugin marketplace add jyotiraditya-chauhan/test-kit
claude plugin install testing-suite@test-kit-marketplace`,
  tryItPrompts: [
    "Write widget tests for my LoginButton widget",
    "Add Supertest coverage for the POST /api/orders route",
    "Test my CheckoutSummary component with RTL",
  ],
} as const;

export const faq = [
  {
    question: "Does it run my tests automatically?",
    answer:
      "No. It writes them and tells you what each one covers, then offers to run and verify. It only executes anything if you say yes.",
  },
  {
    question: "Do I need the Flutter SDK, Node, or Xcode installed for it to write tests?",
    answer:
      "Not for writing. Stack detection reads your manifest files and doesn't need the toolchain. You only need the real toolchain installed if you ask the skill to actually run and verify tests.",
  },
  {
    question: "Will it overwrite my existing tests?",
    answer:
      "No. Every skill detects your existing test framework, mocking library, and file-naming convention first, and matches them instead of introducing a competing one.",
  },
  {
    question: "What if I want tests for the whole app, not just one file?",
    answer:
      "Say so. Every skill explicitly asks whether you want the whole app, one feature, or specific files tested. It never assumes either direction on its own.",
  },
  {
    question: "Can I use this outside Claude Code, on claude.ai or the API?",
    answer:
      "Not well. These skills need real toolchains (flutter, npm, xcodebuild) to detect conventions and optionally run tests, which fits Claude Code's local, CLI-based environment, not the sandboxed, network-isolated execution environments claude.ai and the Claude API's code-execution tool use.",
  },
  {
    question: "Which skill fires if my repo has both a Flutter app and a Node backend?",
    answer: "Whichever one matches the file you're pointing at, even in the same monorepo.",
  },
] as const;

export const footer = {
  links: [
    { label: "GitHub", href: site.repoUrl },
    { label: "README", href: site.repoReadmeUrl },
  ],
} as const;
