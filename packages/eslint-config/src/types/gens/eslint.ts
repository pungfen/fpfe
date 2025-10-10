import type { ImportsRules } from './imports'
import type { JavascriptRules } from './javascript'
import type { JsoncRules } from './jsonc'
import type { PerfectionistRules } from './perfectionist'
import type { PrettierRules } from './prettier'
import type { PromiseRules } from './promise'
import type { StylisticRules } from './stylistic'
import type { TypescriptRules } from './typescript'
import type { VueRules } from './vue'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends ImportsRules, JavascriptRules, JsoncRules, PerfectionistRules, PrettierRules, PromiseRules, StylisticRules, TypescriptRules, VueRules {}
  }
}