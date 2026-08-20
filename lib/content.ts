export const site = {
  name: "Test-kit",
  pluginName: "testing-suite",
  version: "2.4.0",
  license: "MIT",
  repoUrl: "https://github.com/jyotiraditya-chauhan/test-kit",
  repoReadmeUrl: "https://github.com/jyotiraditya-chauhan/test-kit#readme",
  repoLicenseUrl:
    "https://github.com/jyotiraditya-chauhan/test-kit/blob/main/LICENSE",
} as const;

export const metadata = {
  title: "Test-kit: stack-aware test writing for Claude Code",
  description:
    "A Claude Code plugin that writes unit, widget, golden, and integration tests for Flutter, React, Next.js, React Native/Expo, Swift, and Node/Express, matched to your project's own conventions, with an opt-in fault-injection check that proves the tests actually catch bugs.",
} as const;

export const nav = {
  links: [
    { label: "Why", href: "#why" },
    { label: "Skills", href: "#skills" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Install", href: "#install" },
    { label: "Beyond Claude Code", href: "#beyond-claude-code" },
  ],
  installCta: { label: "Install", href: "#install" },
} as const;

export const hero = {
  rows: [
    {
      words: [{ text: "TESTS" }],
      aside: "A Claude Code plugin that writes tests matching your stack, then proves they catch real bugs.",
    },
    {
      words: [{ text: "THAT" }, { icon: "shield" }, { text: "CATCH" }],
      aside: "Flutter, React, Next.js, React Native/Expo, Swift, Node/Express. One skill per stack, zero guesswork.",
    },
    {
      words: [{ text: "REAL" }, { icon: "bug" }, { text: "BUGS" }],
    },
  ],
  ariaLabel: "Tests that catch real bugs",
  metaLeft: "Claude Code Plugin Marketplace",
  signature: { thin: "Testing", accent: "Kit" },
  panelCaption:
    "Two commands. Zero config. Every generated test is fault-injection verified before it's called done.",
  primaryCta: { label: "Get started", href: "#install" },
  secondaryCta: { label: "Star on GitHub", href: site.repoUrl },
} as const;

export const whyTestKit = {
  eyebrow: "01 / why-test-kit",
  title: "Built to be trusted, not just installed.",
  items: [
    {
      title: "Flexible by design",
      description:
        "Detects Flutter, React, Next.js, React Native/Expo, Swift, or Node/Express automatically. One plugin, six stacks, zero manual config.",
    },
    {
      title: "Matches your conventions",
      description:
        "Existing test framework, mocking library, and file naming always win over the skill's own defaults.",
    },
    {
      title: "Asks before assuming",
      description:
        "Every request gets one message, two questions: which layer, what scope. Never inferred silently.",
    },
    {
      title: "Proves it, not just claims it",
      description:
        "The only test-writing skill with a mandatory fault-injection self-check: break the code on purpose, confirm the test catches it, revert clean.",
    },
  ],
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
        "Alchemist",
        "integration_test / Patrol",
      ],
      badge: "Most in-depth",
      note: "Gets the deepest coverage of the six skills. Unit, widget, golden, and integration tests are each first-class, with their own dedicated reference docs, not folded into a generic \"widget testing\" default.",
    },
    {
      id: "react-testing",
      command: "/testing-suite:react-testing",
      firesOn: "package.json with react + react-dom, no next, no react-native",
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
      id: "react-native-testing",
      command: "/testing-suite:react-native-testing",
      firesOn:
        "package.json with react-native (Expo managed, Expo bare, or plain RN CLI)",
      tooling: [
        "Jest (jest-expo or the react-native preset)",
        "React Native Testing Library",
        "Maestro or Detox for E2E",
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
      tooling: "Alchemist (golden_toolkit matched if already present)",
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
        "What's in scope, what's mocked vs real, and the specific edge cases, before any code exists. For a large scope, proposes a batched plan instead of attempting everything at once.",
    },
    {
      n: 5,
      title: "Generate",
      description:
        "AAA-structured tests, boundary-only mocking, matching the project's existing style. One header comment per file stating what it covers, inline comments only when genuinely necessary. Then a free self-review: every assertion gets re-read and strengthened if it doesn't check a specific value or state.",
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
        "Runs each new test at least twice to catch non-determinism, then runs the mandatory fault-injection self-check on business-logic tests, and reports honestly what's covered.",
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

export const beyondClaudeCode = {
  eyebrow: "09 / beyond-claude-code",
  title: "Works beyond Claude Code",
  intro:
    "The SKILL.md folder convention Claude Code popularized is no longer Claude-only. Codex CLI, Cursor, and opencode now read the same SKILL.md + reference/ + scripts/ shape natively, just from different discovery paths. Every skill was already written in generic imperative instructions with no Claude-specific identity language, so the same content works elsewhere too, once it's in a path that tool looks at.",
  commands: [
    {
      label: "Codex CLI or opencode -- both read .agents/skills/ directly",
      code: `git clone --depth 1 https://github.com/jyotiraditya-chauhan/test-kit /tmp/test-kit
cp -r /tmp/test-kit/.agents/skills/. .agents/skills/
rm -rf /tmp/test-kit`,
    },
    {
      label: "Cursor -- same skills, its own discovery path",
      code: `git clone --depth 1 https://github.com/jyotiraditya-chauhan/test-kit /tmp/test-kit
mkdir -p .cursor/skills
cp -r /tmp/test-kit/.agents/skills/. .cursor/skills/
rm -rf /tmp/test-kit`,
    },
    {
      label:
        "Aider, Windsurf, Zed, Gemini CLI, Amp -- no skills system, also appends the condensed fragment to your project's instructions file",
      code: `git clone --depth 1 https://github.com/jyotiraditya-chauhan/test-kit /tmp/test-kit
cp -r /tmp/test-kit/.agents/skills/. .agents/skills/
cat /tmp/test-kit/plugins/testing-suite/portable/AGENTS.md >> AGENTS.md
rm -rf /tmp/test-kit`,
    },
  ],
  caveat:
    "One honest caveat: this was verified by content review and each tool's own published docs on the shared SKILL.md convention, not by an actual end-to-end run inside Codex, Cursor, or opencode themselves -- do a live check in whichever one you use before relying on it for anything critical.",
} as const;

export const contributing = {
  eyebrow: "11 / contribute",
  title: "Contributions are welcome",
  intro:
    "Open an issue or a pull request. A few things that would genuinely help:",
  items: [
    {
      title: "A platform this plugin doesn't cover yet",
      description:
        "A new skill following the same seven-step structure and reference-doc layout as the existing six.",
    },
    {
      title: "Guidance that's drifted from a platform's own current docs",
      description:
        "The same kind of thing the currency-audit passes catch, but between audits, a report or a fix is welcome any time.",
    },
    {
      title: "A real check inside Codex CLI, Cursor, or opencode",
      description:
        "The Beyond Claude Code portability claim is verified by content review, not an actual end-to-end run in any of them. Confirming that against a live install is the single most useful thing anyone could verify right now.",
    },
  ],
  ctaLabel: "Open an issue",
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
  {
    question: "Does this work in Codex, Cursor, or opencode?",
    answer:
      "The skill folders use the same SKILL.md convention those tools now read natively, once you copy them into the path each one looks at. See Beyond Claude Code below for the exact commands and an honest caveat on how this was verified.",
  },
] as const;

export const footer = {
  links: [
    { label: "GitHub", href: site.repoUrl },
    { label: "README", href: site.repoReadmeUrl },
    { label: "Contribute", href: `${site.repoUrl}/issues` },
  ],
  author: {
    name: "Aditya Chauhan",
    email: "adityachauhan0369@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/jyotiraditya-chauhan/",
  },
} as const;
