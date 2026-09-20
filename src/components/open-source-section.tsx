import { ArrowUpRight, PackageOpen } from "lucide-react"
import Link from "next/link"
import { CopyCommandButton } from "@/components/copy-command-button"

type OpenSourcePackageLink = {
  label: string
  href: string
}

type OpenSourcePackage = {
  name: string
  displayName: string
  version: string
  license: string
  story: string
  tags: string[]
  installCommand: string
  links: OpenSourcePackageLink[]
}

const openSourcePackages: OpenSourcePackage[] = [
  {
    name: "@sohantalukder/react-native-boilerplate",
    displayName: "React Native Boilerplate",
    version: "1.0.14",
    license: "MIT",
    story:
      "A production-ready starting point that connects TypeScript, navigation, server and client state, localization, secure storage, testing, and a shared UI layer—so teams can start with product work instead of rebuilding the foundation.",
    tags: ["React Native", "TypeScript", "Zustand", "TanStack Query"],
    installCommand: "npm install @sohantalukder/react-native-boilerplate",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@sohantalukder/react-native-boilerplate",
      },
      {
        label: "GitHub",
        href: "https://github.com/sohantalukder/react-native-boilerplate",
      },
      {
        label: "Documentation",
        href: "https://sohantalukder.github.io/react-native-boilerplate/",
      },
    ],
  },
  {
    name: "@sohantalukder/rn-kit",
    displayName: "RN Kit",
    version: "0.1.0",
    license: "MIT",
    story:
      "Typed, theme-aware React Native primitives for the patterns that products repeat: buttons, inputs, overlays, tokens, and app-level UI helpers. It gives new screens a dependable visual and behavioral foundation.",
    tags: ["UI Components", "Design System", "Theming", "TypeScript"],
    installCommand: "npm install @sohantalukder/rn-kit",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@sohantalukder/rn-kit",
      },
      {
        label: "GitHub",
        href: "https://github.com/sohantalukder/rn-kit",
      },
      {
        label: "Documentation",
        href: "https://rn-kit.vercel.app/",
      },
    ],
  },
  {
    name: "rn-phone-input-field",
    displayName: "Phone Input Field",
    version: "1.2.0",
    license: "MIT",
    story:
      "A focused international phone input with a searchable country-code picker, country-aware validation, input sanitization, TypeScript support, and light or dark presentation—with no runtime dependencies.",
    tags: ["Phone Input", "Validation", "iOS & Android", "Zero Dependencies"],
    installCommand: "npm install rn-phone-input-field",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/rn-phone-input-field",
      },
      {
        label: "GitHub",
        href: "https://github.com/sohantalukder/rn-phone-input-field",
      },
    ],
  },
]

export function OpenSourceSection() {
  return (
    <section
      id="open-source"
      aria-labelledby="open-source-title"
      className="border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="section-kicker">Open source</p>
            <h2
              id="open-source-title"
              className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
            >
              Reusable tools, built in the open.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end lg:text-lg">
            React Native foundations shaped by recurring product problems—from
            application architecture to shared UI and focused form controls.
          </p>
        </div>

        <div>
          {openSourcePackages.map((openSourcePackage, index) => (
            <article
              key={openSourcePackage.name}
              className="group grid gap-7 border-b border-border py-9 md:grid-cols-[6rem_0.7fr_1.3fr] md:py-12"
            >
              <div className="flex items-center justify-between md:block">
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <PackageOpen
                  className="h-5 w-5 text-muted-foreground/60 transition-colors duration-200 group-hover:text-orange-500 md:mt-6"
                  aria-hidden
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {openSourcePackage.displayName}
                </h3>
                <p className="mt-2 break-words font-mono text-xs leading-5 text-orange-600 dark:text-orange-400">
                  {openSourcePackage.name}
                </p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  v{openSourcePackage.version} · {openSourcePackage.license} license
                </p>
              </div>

              <div className="min-w-0">
                <p className="max-w-3xl text-base leading-7 text-foreground/85 sm:text-lg">
                  {openSourcePackage.story}
                </p>

                <ul
                  className="mt-5 flex flex-wrap gap-x-4 gap-y-2"
                  aria-label={`${openSourcePackage.displayName} technologies and features`}
                >
                  {openSourcePackage.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/65"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex min-w-0 items-center gap-3 border-y border-border py-3">
                  <div className="min-w-0 flex-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <code className="whitespace-nowrap font-mono text-xs text-muted-foreground sm:text-sm">
                      {openSourcePackage.installCommand}
                    </code>
                  </div>
                  <CopyCommandButton command={openSourcePackage.installCommand} />
                </div>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {openSourcePackage.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="editorial-arrow h-4 w-4" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="https://www.npmjs.com/search?q=maintainer%3Asohantalukder"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link"
          >
            View all packages on npm
            <ArrowUpRight className="editorial-arrow h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
