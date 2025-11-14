/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/array-bracket-newline
   */
  '@stylistic/array-bracket-newline'?: Linter.RuleEntry<StylisticArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/array-bracket-spacing
   */
  '@stylistic/array-bracket-spacing'?: Linter.RuleEntry<StylisticArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/array-element-newline
   */
  '@stylistic/array-element-newline'?: Linter.RuleEntry<StylisticArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/arrow-parens
   */
  '@stylistic/arrow-parens'?: Linter.RuleEntry<StylisticArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/arrow-spacing
   */
  '@stylistic/arrow-spacing'?: Linter.RuleEntry<StylisticArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/block-spacing
   */
  '@stylistic/block-spacing'?: Linter.RuleEntry<StylisticBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/brace-style
   */
  '@stylistic/brace-style'?: Linter.RuleEntry<StylisticBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/comma-dangle
   */
  '@stylistic/comma-dangle'?: Linter.RuleEntry<StylisticCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/comma-spacing
   */
  '@stylistic/comma-spacing'?: Linter.RuleEntry<StylisticCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/comma-style
   */
  '@stylistic/comma-style'?: Linter.RuleEntry<StylisticCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/computed-property-spacing
   */
  '@stylistic/computed-property-spacing'?: Linter.RuleEntry<StylisticComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/curly-newline
   */
  '@stylistic/curly-newline'?: Linter.RuleEntry<StylisticCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/dot-location
   */
  '@stylistic/dot-location'?: Linter.RuleEntry<StylisticDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/eol-last
   */
  '@stylistic/eol-last'?: Linter.RuleEntry<StylisticEolLast>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/function-call-argument-newline
   */
  '@stylistic/function-call-argument-newline'?: Linter.RuleEntry<StylisticFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/function-call-spacing
   */
  '@stylistic/function-call-spacing'?: Linter.RuleEntry<StylisticFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/function-paren-newline
   */
  '@stylistic/function-paren-newline'?: Linter.RuleEntry<StylisticFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/generator-star-spacing
   */
  '@stylistic/generator-star-spacing'?: Linter.RuleEntry<StylisticGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/implicit-arrow-linebreak
   */
  '@stylistic/implicit-arrow-linebreak'?: Linter.RuleEntry<StylisticImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/indent
   */
  '@stylistic/indent'?: Linter.RuleEntry<StylisticIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/indent-binary-ops
   */
  '@stylistic/indent-binary-ops'?: Linter.RuleEntry<StylisticIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-child-element-spacing
   */
  '@stylistic/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx-closing-bracket-location
   */
  '@stylistic/jsx-closing-bracket-location'?: Linter.RuleEntry<StylisticJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx-closing-tag-location
   */
  '@stylistic/jsx-closing-tag-location'?: Linter.RuleEntry<StylisticJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx-curly-brace-presence
   */
  '@stylistic/jsx-curly-brace-presence'?: Linter.RuleEntry<StylisticJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-newline
   */
  '@stylistic/jsx-curly-newline'?: Linter.RuleEntry<StylisticJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-spacing
   */
  '@stylistic/jsx-curly-spacing'?: Linter.RuleEntry<StylisticJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx-equals-spacing
   */
  '@stylistic/jsx-equals-spacing'?: Linter.RuleEntry<StylisticJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx-first-prop-new-line
   */
  '@stylistic/jsx-first-prop-new-line'?: Linter.RuleEntry<StylisticJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx-function-call-newline
   */
  '@stylistic/jsx-function-call-newline'?: Linter.RuleEntry<StylisticJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx-indent
   * @deprecated
   */
  '@stylistic/jsx-indent'?: Linter.RuleEntry<StylisticJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx-indent-props
   */
  '@stylistic/jsx-indent-props'?: Linter.RuleEntry<StylisticJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx-max-props-per-line
   */
  '@stylistic/jsx-max-props-per-line'?: Linter.RuleEntry<StylisticJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx-newline
   */
  '@stylistic/jsx-newline'?: Linter.RuleEntry<StylisticJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx-one-expression-per-line
   */
  '@stylistic/jsx-one-expression-per-line'?: Linter.RuleEntry<StylisticJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx-pascal-case
   */
  '@stylistic/jsx-pascal-case'?: Linter.RuleEntry<StylisticJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props. Deprecated, use `no-multi-spaces` rule instead.
   * @see https://eslint.style/rules/jsx-props-no-multi-spaces
   * @deprecated
   */
  '@stylistic/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/jsx-quotes
   */
  '@stylistic/jsx-quotes'?: Linter.RuleEntry<StylisticJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx-self-closing-comp
   */
  '@stylistic/jsx-self-closing-comp'?: Linter.RuleEntry<StylisticJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx-sort-props
   */
  '@stylistic/jsx-sort-props'?: Linter.RuleEntry<StylisticJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx-tag-spacing
   */
  '@stylistic/jsx-tag-spacing'?: Linter.RuleEntry<StylisticJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx-wrap-multilines
   */
  '@stylistic/jsx-wrap-multilines'?: Linter.RuleEntry<StylisticJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/key-spacing
   */
  '@stylistic/key-spacing'?: Linter.RuleEntry<StylisticKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/keyword-spacing
   */
  '@stylistic/keyword-spacing'?: Linter.RuleEntry<StylisticKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/line-comment-position
   */
  '@stylistic/line-comment-position'?: Linter.RuleEntry<StylisticLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/linebreak-style
   */
  '@stylistic/linebreak-style'?: Linter.RuleEntry<StylisticLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/lines-around-comment
   */
  '@stylistic/lines-around-comment'?: Linter.RuleEntry<StylisticLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/lines-between-class-members
   */
  '@stylistic/lines-between-class-members'?: Linter.RuleEntry<StylisticLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/max-len
   */
  '@stylistic/max-len'?: Linter.RuleEntry<StylisticMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/max-statements-per-line
   */
  '@stylistic/max-statements-per-line'?: Linter.RuleEntry<StylisticMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/member-delimiter-style
   */
  '@stylistic/member-delimiter-style'?: Linter.RuleEntry<StylisticMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/multiline-comment-style
   */
  '@stylistic/multiline-comment-style'?: Linter.RuleEntry<StylisticMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/multiline-ternary
   */
  '@stylistic/multiline-ternary'?: Linter.RuleEntry<StylisticMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/new-parens
   */
  '@stylistic/new-parens'?: Linter.RuleEntry<StylisticNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/newline-per-chained-call
   */
  '@stylistic/newline-per-chained-call'?: Linter.RuleEntry<StylisticNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/no-confusing-arrow
   */
  '@stylistic/no-confusing-arrow'?: Linter.RuleEntry<StylisticNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/no-extra-parens
   */
  '@stylistic/no-extra-parens'?: Linter.RuleEntry<StylisticNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/no-extra-semi
   */
  '@stylistic/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/no-floating-decimal
   */
  '@stylistic/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/no-mixed-operators
   */
  '@stylistic/no-mixed-operators'?: Linter.RuleEntry<StylisticNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/no-mixed-spaces-and-tabs
   */
  '@stylistic/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StylisticNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/no-multi-spaces
   */
  '@stylistic/no-multi-spaces'?: Linter.RuleEntry<StylisticNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/no-multiple-empty-lines
   */
  '@stylistic/no-multiple-empty-lines'?: Linter.RuleEntry<StylisticNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/no-tabs
   */
  '@stylistic/no-tabs'?: Linter.RuleEntry<StylisticNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/no-trailing-spaces
   */
  '@stylistic/no-trailing-spaces'?: Linter.RuleEntry<StylisticNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/no-whitespace-before-property
   */
  '@stylistic/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/nonblock-statement-body-position
   */
  '@stylistic/nonblock-statement-body-position'?: Linter.RuleEntry<StylisticNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/object-curly-newline
   */
  '@stylistic/object-curly-newline'?: Linter.RuleEntry<StylisticObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/object-curly-spacing
   */
  '@stylistic/object-curly-spacing'?: Linter.RuleEntry<StylisticObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/object-property-newline
   */
  '@stylistic/object-property-newline'?: Linter.RuleEntry<StylisticObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/one-var-declaration-per-line
   */
  '@stylistic/one-var-declaration-per-line'?: Linter.RuleEntry<StylisticOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/operator-linebreak
   */
  '@stylistic/operator-linebreak'?: Linter.RuleEntry<StylisticOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/padded-blocks
   */
  '@stylistic/padded-blocks'?: Linter.RuleEntry<StylisticPaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements'?: Linter.RuleEntry<StylisticPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/quote-props
   */
  '@stylistic/quote-props'?: Linter.RuleEntry<StylisticQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/quotes
   */
  '@stylistic/quotes'?: Linter.RuleEntry<StylisticQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/rest-spread-spacing
   */
  '@stylistic/rest-spread-spacing'?: Linter.RuleEntry<StylisticRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/semi
   */
  '@stylistic/semi'?: Linter.RuleEntry<StylisticSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/semi-spacing
   */
  '@stylistic/semi-spacing'?: Linter.RuleEntry<StylisticSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/semi-style
   */
  '@stylistic/semi-style'?: Linter.RuleEntry<StylisticSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/space-before-blocks
   */
  '@stylistic/space-before-blocks'?: Linter.RuleEntry<StylisticSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/space-before-function-paren
   */
  '@stylistic/space-before-function-paren'?: Linter.RuleEntry<StylisticSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/space-in-parens
   */
  '@stylistic/space-in-parens'?: Linter.RuleEntry<StylisticSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/space-infix-ops
   */
  '@stylistic/space-infix-ops'?: Linter.RuleEntry<StylisticSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/space-unary-ops
   */
  '@stylistic/space-unary-ops'?: Linter.RuleEntry<StylisticSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/spaced-comment
   */
  '@stylistic/spaced-comment'?: Linter.RuleEntry<StylisticSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/switch-colon-spacing
   */
  '@stylistic/switch-colon-spacing'?: Linter.RuleEntry<StylisticSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/template-curly-spacing
   */
  '@stylistic/template-curly-spacing'?: Linter.RuleEntry<StylisticTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/template-tag-spacing
   */
  '@stylistic/template-tag-spacing'?: Linter.RuleEntry<StylisticTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/type-annotation-spacing
   */
  '@stylistic/type-annotation-spacing'?: Linter.RuleEntry<StylisticTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/type-generic-spacing
   */
  '@stylistic/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/type-named-tuple-spacing
   */
  '@stylistic/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/wrap-iife
   */
  '@stylistic/wrap-iife'?: Linter.RuleEntry<StylisticWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/wrap-regex
   */
  '@stylistic/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/yield-star-spacing
   */
  '@stylistic/yield-star-spacing'?: Linter.RuleEntry<StylisticYieldStarSpacing>
  /**
   * Enforce sorted arrays before include method.
   * @see https://perfectionist.dev/rules/sort-array-includes
   */
  'perfectionist/sort-array-includes'?: Linter.RuleEntry<PerfectionistSortArrayIncludes>
  /**
   * Enforce sorted classes.
   * @see https://perfectionist.dev/rules/sort-classes
   */
  'perfectionist/sort-classes'?: Linter.RuleEntry<PerfectionistSortClasses>
  /**
   * Enforce sorted decorators.
   * @see https://perfectionist.dev/rules/sort-decorators
   */
  'perfectionist/sort-decorators'?: Linter.RuleEntry<PerfectionistSortDecorators>
  /**
   * Enforce sorted TypeScript enums.
   * @see https://perfectionist.dev/rules/sort-enums
   */
  'perfectionist/sort-enums'?: Linter.RuleEntry<PerfectionistSortEnums>
  /**
   * Enforce sorted exports.
   * @see https://perfectionist.dev/rules/sort-exports
   */
  'perfectionist/sort-exports'?: Linter.RuleEntry<PerfectionistSortExports>
  /**
   * Enforce sorted heritage clauses.
   * @see https://perfectionist.dev/rules/sort-heritage-clauses
   */
  'perfectionist/sort-heritage-clauses'?: Linter.RuleEntry<PerfectionistSortHeritageClauses>
  /**
   * Enforce sorted imports.
   * @see https://perfectionist.dev/rules/sort-imports
   */
  'perfectionist/sort-imports'?: Linter.RuleEntry<PerfectionistSortImports>
  /**
   * Enforce sorted interface properties.
   * @see https://perfectionist.dev/rules/sort-interfaces
   */
  'perfectionist/sort-interfaces'?: Linter.RuleEntry<PerfectionistSortInterfaces>
  /**
   * Enforce sorted intersection types.
   * @see https://perfectionist.dev/rules/sort-intersection-types
   */
  'perfectionist/sort-intersection-types'?: Linter.RuleEntry<PerfectionistSortIntersectionTypes>
  /**
   * Enforce sorted JSX props.
   * @see https://perfectionist.dev/rules/sort-jsx-props
   */
  'perfectionist/sort-jsx-props'?: Linter.RuleEntry<PerfectionistSortJsxProps>
  /**
   * Enforce sorted Map elements.
   * @see https://perfectionist.dev/rules/sort-maps
   */
  'perfectionist/sort-maps'?: Linter.RuleEntry<PerfectionistSortMaps>
  /**
   * Enforce sorted modules.
   * @see https://perfectionist.dev/rules/sort-modules
   */
  'perfectionist/sort-modules'?: Linter.RuleEntry<PerfectionistSortModules>
  /**
   * Enforce sorted named exports.
   * @see https://perfectionist.dev/rules/sort-named-exports
   */
  'perfectionist/sort-named-exports'?: Linter.RuleEntry<PerfectionistSortNamedExports>
  /**
   * Enforce sorted named imports.
   * @see https://perfectionist.dev/rules/sort-named-imports
   */
  'perfectionist/sort-named-imports'?: Linter.RuleEntry<PerfectionistSortNamedImports>
  /**
   * Enforce sorted object types.
   * @see https://perfectionist.dev/rules/sort-object-types
   */
  'perfectionist/sort-object-types'?: Linter.RuleEntry<PerfectionistSortObjectTypes>
  /**
   * Enforce sorted objects.
   * @see https://perfectionist.dev/rules/sort-objects
   */
  'perfectionist/sort-objects'?: Linter.RuleEntry<PerfectionistSortObjects>
  /**
   * Enforce sorted sets.
   * @see https://perfectionist.dev/rules/sort-sets
   */
  'perfectionist/sort-sets'?: Linter.RuleEntry<PerfectionistSortSets>
  /**
   * Enforce sorted switch cases.
   * @see https://perfectionist.dev/rules/sort-switch-case
   */
  'perfectionist/sort-switch-case'?: Linter.RuleEntry<PerfectionistSortSwitchCase>
  /**
   * Enforce sorted union types.
   * @see https://perfectionist.dev/rules/sort-union-types
   */
  'perfectionist/sort-union-types'?: Linter.RuleEntry<PerfectionistSortUnionTypes>
  /**
   * Enforce sorted variable declarations.
   * @see https://perfectionist.dev/rules/sort-variable-declarations
   */
  'perfectionist/sort-variable-declarations'?: Linter.RuleEntry<PerfectionistSortVariableDeclarations>
  /**
   * Enforce linebreaks after opening and before closing array brackets in `<template>`
   * @see https://eslint.vuejs.org/rules/array-bracket-newline.html
   */
  'vue/array-bracket-newline'?: Linter.RuleEntry<VueArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets in `<template>`
   * @see https://eslint.vuejs.org/rules/array-bracket-spacing.html
   */
  'vue/array-bracket-spacing'?: Linter.RuleEntry<VueArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element in `<template>`
   * @see https://eslint.vuejs.org/rules/array-element-newline.html
   */
  'vue/array-element-newline'?: Linter.RuleEntry<VueArrayElementNewline>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`
   * @see https://eslint.vuejs.org/rules/arrow-spacing.html
   */
  'vue/arrow-spacing'?: Linter.RuleEntry<VueArrowSpacing>
  /**
   * enforce attribute naming style on custom components in template
   * @see https://eslint.vuejs.org/rules/attribute-hyphenation.html
   */
  'vue/attribute-hyphenation'?: Linter.RuleEntry<VueAttributeHyphenation>
  /**
   * enforce order of attributes
   * @see https://eslint.vuejs.org/rules/attributes-order.html
   */
  'vue/attributes-order'?: Linter.RuleEntry<VueAttributesOrder>
  /**
   * disallow use other than available `lang`
   * @see https://eslint.vuejs.org/rules/block-lang.html
   */
  'vue/block-lang'?: Linter.RuleEntry<VueBlockLang>
  /**
   * enforce order of component top-level elements
   * @see https://eslint.vuejs.org/rules/block-order.html
   */
  'vue/block-order'?: Linter.RuleEntry<VueBlockOrder>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`
   * @see https://eslint.vuejs.org/rules/block-spacing.html
   */
  'vue/block-spacing'?: Linter.RuleEntry<VueBlockSpacing>
  /**
   * enforce line breaks after opening and before closing block-level tags
   * @see https://eslint.vuejs.org/rules/block-tag-newline.html
   */
  'vue/block-tag-newline'?: Linter.RuleEntry<VueBlockTagNewline>
  /**
   * Enforce consistent brace style for blocks in `<template>`
   * @see https://eslint.vuejs.org/rules/brace-style.html
   */
  'vue/brace-style'?: Linter.RuleEntry<VueBraceStyle>
  /**
   * Enforce camelcase naming convention in `<template>`
   * @see https://eslint.vuejs.org/rules/camelcase.html
   */
  'vue/camelcase'?: Linter.RuleEntry<VueCamelcase>
  /**
   * Require or disallow trailing commas in `<template>`
   * @see https://eslint.vuejs.org/rules/comma-dangle.html
   */
  'vue/comma-dangle'?: Linter.RuleEntry<VueCommaDangle>
  /**
   * Enforce consistent spacing before and after commas in `<template>`
   * @see https://eslint.vuejs.org/rules/comma-spacing.html
   */
  'vue/comma-spacing'?: Linter.RuleEntry<VueCommaSpacing>
  /**
   * Enforce consistent comma style in `<template>`
   * @see https://eslint.vuejs.org/rules/comma-style.html
   */
  'vue/comma-style'?: Linter.RuleEntry<VueCommaStyle>
  /**
   * support comment-directives in `<template>`
   * @see https://eslint.vuejs.org/rules/comment-directive.html
   */
  'vue/comment-directive'?: Linter.RuleEntry<VueCommentDirective>
  /**
   * enforce component API style
   * @see https://eslint.vuejs.org/rules/component-api-style.html
   */
  'vue/component-api-style'?: Linter.RuleEntry<VueComponentApiStyle>
  /**
   * enforce specific casing for component definition name
   * @see https://eslint.vuejs.org/rules/component-definition-name-casing.html
   */
  'vue/component-definition-name-casing'?: Linter.RuleEntry<VueComponentDefinitionNameCasing>
  /**
   * enforce specific casing for the component naming style in template
   * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
   */
  'vue/component-name-in-template-casing'?: Linter.RuleEntry<VueComponentNameInTemplateCasing>
  /**
   * enforce the casing of component name in `components` options
   * @see https://eslint.vuejs.org/rules/component-options-name-casing.html
   */
  'vue/component-options-name-casing'?: Linter.RuleEntry<VueComponentOptionsNameCasing>
  /**
   * enforce specific casing for custom event name
   * @see https://eslint.vuejs.org/rules/custom-event-name-casing.html
   */
  'vue/custom-event-name-casing'?: Linter.RuleEntry<VueCustomEventNameCasing>
  /**
   * enforce declaration style of `defineEmits`
   * @see https://eslint.vuejs.org/rules/define-emits-declaration.html
   */
  'vue/define-emits-declaration'?: Linter.RuleEntry<VueDefineEmitsDeclaration>
  /**
   * enforce order of compiler macros (`defineProps`, `defineEmits`, etc.)
   * @see https://eslint.vuejs.org/rules/define-macros-order.html
   */
  'vue/define-macros-order'?: Linter.RuleEntry<VueDefineMacrosOrder>
  /**
   * enforce declaration style of `defineProps`
   * @see https://eslint.vuejs.org/rules/define-props-declaration.html
   */
  'vue/define-props-declaration'?: Linter.RuleEntry<VueDefinePropsDeclaration>
  /**
   * enforce consistent style for props destructuring
   * @see https://eslint.vuejs.org/rules/define-props-destructuring.html
   */
  'vue/define-props-destructuring'?: Linter.RuleEntry<VueDefinePropsDestructuring>
  /**
   * Enforce consistent newlines before and after dots in `<template>`
   * @see https://eslint.vuejs.org/rules/dot-location.html
   */
  'vue/dot-location'?: Linter.RuleEntry<VueDotLocation>
  /**
   * Enforce dot notation whenever possible in `<template>`
   * @see https://eslint.vuejs.org/rules/dot-notation.html
   */
  'vue/dot-notation'?: Linter.RuleEntry<VueDotNotation>
  /**
   * enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags
   * @see https://eslint.vuejs.org/rules/enforce-style-attribute.html
   */
  'vue/enforce-style-attribute'?: Linter.RuleEntry<VueEnforceStyleAttribute>
  /**
   * Require the use of `===` and `!==` in `<template>`
   * @see https://eslint.vuejs.org/rules/eqeqeq.html
   */
  'vue/eqeqeq'?: Linter.RuleEntry<VueEqeqeq>
  /**
   * enforce the location of first attribute
   * @see https://eslint.vuejs.org/rules/first-attribute-linebreak.html
   */
  'vue/first-attribute-linebreak'?: Linter.RuleEntry<VueFirstAttributeLinebreak>
  /**
   * Require or disallow spacing between function identifiers and their invocations in `<template>`
   * @see https://eslint.vuejs.org/rules/func-call-spacing.html
   */
  'vue/func-call-spacing'?: Linter.RuleEntry<VueFuncCallSpacing>
  /**
   * disallow usage of button without an explicit type attribute
   * @see https://eslint.vuejs.org/rules/html-button-has-type.html
   */
  'vue/html-button-has-type'?: Linter.RuleEntry<VueHtmlButtonHasType>
  /**
   * require or disallow a line break before tag's closing brackets
   * @see https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
   */
  'vue/html-closing-bracket-newline'?: Linter.RuleEntry<VueHtmlClosingBracketNewline>
  /**
   * require or disallow a space before tag's closing brackets
   * @see https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
   */
  'vue/html-closing-bracket-spacing'?: Linter.RuleEntry<VueHtmlClosingBracketSpacing>
  /**
   * enforce unified line break in HTML comments
   * @see https://eslint.vuejs.org/rules/html-comment-content-newline.html
   */
  'vue/html-comment-content-newline'?: Linter.RuleEntry<VueHtmlCommentContentNewline>
  /**
   * enforce unified spacing in HTML comments
   * @see https://eslint.vuejs.org/rules/html-comment-content-spacing.html
   */
  'vue/html-comment-content-spacing'?: Linter.RuleEntry<VueHtmlCommentContentSpacing>
  /**
   * enforce consistent indentation in HTML comments
   * @see https://eslint.vuejs.org/rules/html-comment-indent.html
   */
  'vue/html-comment-indent'?: Linter.RuleEntry<VueHtmlCommentIndent>
  /**
   * enforce end tag style
   * @see https://eslint.vuejs.org/rules/html-end-tags.html
   */
  'vue/html-end-tags'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent indentation in `<template>`
   * @see https://eslint.vuejs.org/rules/html-indent.html
   */
  'vue/html-indent'?: Linter.RuleEntry<VueHtmlIndent>
  /**
   * enforce quotes style of HTML attributes
   * @see https://eslint.vuejs.org/rules/html-quotes.html
   */
  'vue/html-quotes'?: Linter.RuleEntry<VueHtmlQuotes>
  /**
   * enforce self-closing style
   * @see https://eslint.vuejs.org/rules/html-self-closing.html
   */
  'vue/html-self-closing'?: Linter.RuleEntry<VueHtmlSelfClosing>
  /**
   * prevent variables used in JSX to be marked as unused
   * @see https://eslint.vuejs.org/rules/jsx-uses-vars.html
   */
  'vue/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces in `<template>`
   * @see https://eslint.vuejs.org/rules/key-spacing.html
   */
  'vue/key-spacing'?: Linter.RuleEntry<VueKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords in `<template>`
   * @see https://eslint.vuejs.org/rules/keyword-spacing.html
   */
  'vue/keyword-spacing'?: Linter.RuleEntry<VueKeywordSpacing>
  /**
   * require component name property to match its file name
   * @see https://eslint.vuejs.org/rules/match-component-file-name.html
   */
  'vue/match-component-file-name'?: Linter.RuleEntry<VueMatchComponentFileName>
  /**
   * require the registered component name to match the imported component name
   * @see https://eslint.vuejs.org/rules/match-component-import-name.html
   */
  'vue/match-component-import-name'?: Linter.RuleEntry<[]>
  /**
   * enforce the maximum number of attributes per line
   * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
   */
  'vue/max-attributes-per-line'?: Linter.RuleEntry<VueMaxAttributesPerLine>
  /**
   * enforce a maximum line length in `.vue` files
   * @see https://eslint.vuejs.org/rules/max-len.html
   */
  'vue/max-len'?: Linter.RuleEntry<VueMaxLen>
  /**
   * enforce maximum number of lines in Vue SFC blocks
   * @see https://eslint.vuejs.org/rules/max-lines-per-block.html
   */
  'vue/max-lines-per-block'?: Linter.RuleEntry<VueMaxLinesPerBlock>
  /**
   * enforce maximum number of props in Vue component
   * @see https://eslint.vuejs.org/rules/max-props.html
   */
  'vue/max-props'?: Linter.RuleEntry<VueMaxProps>
  /**
   * enforce maximum depth of template
   * @see https://eslint.vuejs.org/rules/max-template-depth.html
   */
  'vue/max-template-depth'?: Linter.RuleEntry<VueMaxTemplateDepth>
  /**
   * require component names to be always multi-word
   * @see https://eslint.vuejs.org/rules/multi-word-component-names.html
   */
  'vue/multi-word-component-names'?: Linter.RuleEntry<VueMultiWordComponentNames>
  /**
   * require a line break before and after the contents of a multiline element
   * @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
   */
  'vue/multiline-html-element-content-newline'?: Linter.RuleEntry<VueMultilineHtmlElementContentNewline>
  /**
   * Enforce newlines between operands of ternary expressions in `<template>`
   * @see https://eslint.vuejs.org/rules/multiline-ternary.html
   */
  'vue/multiline-ternary'?: Linter.RuleEntry<VueMultilineTernary>
  /**
   * enforce unified spacing in mustache interpolations
   * @see https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
   */
  'vue/mustache-interpolation-spacing'?: Linter.RuleEntry<VueMustacheInterpolationSpacing>
  /**
   * enforce new lines between multi-line properties in Vue components
   * @see https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
   */
  'vue/new-line-between-multi-line-property'?: Linter.RuleEntry<VueNewLineBetweenMultiLineProperty>
  /**
   * enforce Promise or callback style in `nextTick`
   * @see https://eslint.vuejs.org/rules/next-tick-style.html
   */
  'vue/next-tick-style'?: Linter.RuleEntry<VueNextTickStyle>
  /**
   * disallow using arrow functions to define watcher
   * @see https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
   */
  'vue/no-arrow-functions-in-watch'?: Linter.RuleEntry<[]>
  /**
   * disallow asynchronous actions in computed properties
   * @see https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
   */
  'vue/no-async-in-computed-properties'?: Linter.RuleEntry<VueNoAsyncInComputedProperties>
  /**
   * disallow the use of bare strings in `<template>`
   * @see https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
   */
  'vue/no-bare-strings-in-template'?: Linter.RuleEntry<VueNoBareStringsInTemplate>
  /**
   * disallow boolean defaults
   * @see https://eslint.vuejs.org/rules/no-boolean-default.html
   */
  'vue/no-boolean-default'?: Linter.RuleEntry<VueNoBooleanDefault>
  /**
   * disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`
   * @see https://eslint.vuejs.org/rules/no-child-content.html
   */
  'vue/no-child-content'?: Linter.RuleEntry<VueNoChildContent>
  /**
   * disallow accessing computed properties in `data`
   * @see https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
   */
  'vue/no-computed-properties-in-data'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `console` in `<template>`
   * @see https://eslint.vuejs.org/rules/no-console.html
   */
  'vue/no-console'?: Linter.RuleEntry<VueNoConsole>
  /**
   * Disallow constant expressions in conditions in `<template>`
   * @see https://eslint.vuejs.org/rules/no-constant-condition.html
   */
  'vue/no-constant-condition'?: Linter.RuleEntry<VueNoConstantCondition>
  /**
   * disallow custom modifiers on v-model used on the component
   * @see https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
   */
  'vue/no-custom-modifiers-on-v-model'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
   */
  'vue/no-deprecated-data-object-declaration'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `$delete` and `$set` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-delete-set.html
   */
  'vue/no-deprecated-delete-set'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
   */
  'vue/no-deprecated-destroyed-lifecycle'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `$listeners` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
   */
  'vue/no-deprecated-dollar-listeners-api'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
   */
  'vue/no-deprecated-dollar-scopedslots-api'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated events api (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-events-api.html
   */
  'vue/no-deprecated-events-api'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-filter.html
   */
  'vue/no-deprecated-filter'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated the `functional` template (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
   */
  'vue/no-deprecated-functional-template'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
   */
  'vue/no-deprecated-html-element-is'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
   */
  'vue/no-deprecated-inline-template'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated `model` definition (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-model-definition.html
   */
  'vue/no-deprecated-model-definition'?: Linter.RuleEntry<VueNoDeprecatedModelDefinition>
  /**
   * disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
   */
  'vue/no-deprecated-props-default-this'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
   */
  'vue/no-deprecated-router-link-tag-prop'?: Linter.RuleEntry<VueNoDeprecatedRouterLinkTagProp>
  /**
   * disallow deprecated `scope` attribute (in Vue.js 2.5.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
   */
  'vue/no-deprecated-scope-attribute'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
   */
  'vue/no-deprecated-slot-attribute'?: Linter.RuleEntry<VueNoDeprecatedSlotAttribute>
  /**
   * disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
   */
  'vue/no-deprecated-slot-scope-attribute'?: Linter.RuleEntry<[]>
  /**
   * disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
   */
  'vue/no-deprecated-v-bind-sync'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated `v-is` directive (in Vue.js 3.1.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-is.html
   */
  'vue/no-deprecated-v-is'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
   */
  'vue/no-deprecated-v-on-native-modifier'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
   */
  'vue/no-deprecated-v-on-number-modifiers'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
   */
  'vue/no-deprecated-vue-config-keycodes'?: Linter.RuleEntry<[]>
  /**
   * disallow duplication of field names
   * @see https://eslint.vuejs.org/rules/no-dupe-keys.html
   */
  'vue/no-dupe-keys'?: Linter.RuleEntry<VueNoDupeKeys>
  /**
   * disallow duplicate conditions in `v-if` / `v-else-if` chains
   * @see https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
   */
  'vue/no-dupe-v-else-if'?: Linter.RuleEntry<[]>
  /**
   * enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`
   * @see https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
   */
  'vue/no-duplicate-attr-inheritance'?: Linter.RuleEntry<VueNoDuplicateAttrInheritance>
  /**
   * disallow duplication of attributes
   * @see https://eslint.vuejs.org/rules/no-duplicate-attributes.html
   */
  'vue/no-duplicate-attributes'?: Linter.RuleEntry<VueNoDuplicateAttributes>
  /**
   * disallow the `<template>` `<script>` `<style>` block to be empty
   * @see https://eslint.vuejs.org/rules/no-empty-component-block.html
   */
  'vue/no-empty-component-block'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty destructuring patterns in `<template>`
   * @see https://eslint.vuejs.org/rules/no-empty-pattern.html
   */
  'vue/no-empty-pattern'?: Linter.RuleEntry<VueNoEmptyPattern>
  /**
   * disallow `export` in `<script setup>`
   * @see https://eslint.vuejs.org/rules/no-export-in-script-setup.html
   */
  'vue/no-export-in-script-setup'?: Linter.RuleEntry<[]>
  /**
   * disallow asynchronously registered `expose`
   * @see https://eslint.vuejs.org/rules/no-expose-after-await.html
   */
  'vue/no-expose-after-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary parentheses in `<template>`
   * @see https://eslint.vuejs.org/rules/no-extra-parens.html
   */
  'vue/no-extra-parens'?: Linter.RuleEntry<VueNoExtraParens>
  /**
   * Disallow shorthand type conversions in `<template>`
   * @see https://eslint.vuejs.org/rules/no-implicit-coercion.html
   */
  'vue/no-implicit-coercion'?: Linter.RuleEntry<VueNoImplicitCoercion>
  /**
   * disallow importing Vue compiler macros
   * @see https://eslint.vuejs.org/rules/no-import-compiler-macros.html
   */
  'vue/no-import-compiler-macros'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace in `.vue` files
   * @see https://eslint.vuejs.org/rules/no-irregular-whitespace.html
   */
  'vue/no-irregular-whitespace'?: Linter.RuleEntry<VueNoIrregularWhitespace>
  /**
   * disallow asynchronously registered lifecycle hooks
   * @see https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
   */
  'vue/no-lifecycle-after-await'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `<template>`
   * @see https://eslint.vuejs.org/rules/no-lone-template.html
   */
  'vue/no-lone-template'?: Linter.RuleEntry<VueNoLoneTemplate>
  /**
   * Disallow literal numbers that lose precision in `<template>`
   * @see https://eslint.vuejs.org/rules/no-loss-of-precision.html
   */
  'vue/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * disallow multiple spaces
   * @see https://eslint.vuejs.org/rules/no-multi-spaces.html
   */
  'vue/no-multi-spaces'?: Linter.RuleEntry<VueNoMultiSpaces>
  /**
   * disallow passing multiple objects in an array to class
   * @see https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
   */
  'vue/no-multiple-objects-in-class'?: Linter.RuleEntry<[]>
  /**
   * disallow passing multiple arguments to scoped slots
   * @see https://eslint.vuejs.org/rules/no-multiple-slot-args.html
   */
  'vue/no-multiple-slot-args'?: Linter.RuleEntry<[]>
  /**
   * disallow adding multiple root nodes to the template
   * @see https://eslint.vuejs.org/rules/no-multiple-template-root.html
   */
  'vue/no-multiple-template-root'?: Linter.RuleEntry<VueNoMultipleTemplateRoot>
  /**
   * disallow mutation of component props
   * @see https://eslint.vuejs.org/rules/no-mutating-props.html
   */
  'vue/no-mutating-props'?: Linter.RuleEntry<VueNoMutatingProps>
  /**
   * Disallow negated conditions in `<template>`
   * @see https://eslint.vuejs.org/rules/no-negated-condition.html
   */
  'vue/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * disallow negated conditions in v-if/v-else
   * @see https://eslint.vuejs.org/rules/no-negated-v-if-condition.html
   */
  'vue/no-negated-v-if-condition'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in `<template>`
   * @see https://eslint.vuejs.org/rules/no-parsing-error.html
   */
  'vue/no-parsing-error'?: Linter.RuleEntry<VueNoParsingError>
  /**
   * disallow a potential typo in your component property
   * @see https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
   */
  'vue/no-potential-component-option-typo'?: Linter.RuleEntry<VueNoPotentialComponentOptionTypo>
  /**
   * disallow use of value wrapped by `ref()` (Composition API) as an operand
   * @see https://eslint.vuejs.org/rules/no-ref-as-operand.html
   */
  'vue/no-ref-as-operand'?: Linter.RuleEntry<[]>
  /**
   * disallow usages of ref objects that can lead to loss of reactivity
   * @see https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html
   */
  'vue/no-ref-object-reactivity-loss'?: Linter.RuleEntry<[]>
  /**
   * enforce props with default values to be optional
   * @see https://eslint.vuejs.org/rules/no-required-prop-with-default.html
   */
  'vue/no-required-prop-with-default'?: Linter.RuleEntry<VueNoRequiredPropWithDefault>
  /**
   * disallow the use of reserved names in component definitions
   * @see https://eslint.vuejs.org/rules/no-reserved-component-names.html
   */
  'vue/no-reserved-component-names'?: Linter.RuleEntry<VueNoReservedComponentNames>
  /**
   * disallow overwriting reserved keys
   * @see https://eslint.vuejs.org/rules/no-reserved-keys.html
   */
  'vue/no-reserved-keys'?: Linter.RuleEntry<VueNoReservedKeys>
  /**
   * disallow reserved names in props
   * @see https://eslint.vuejs.org/rules/no-reserved-props.html
   */
  'vue/no-reserved-props'?: Linter.RuleEntry<VueNoReservedProps>
  /**
   * disallow specific block
   * @see https://eslint.vuejs.org/rules/no-restricted-block.html
   */
  'vue/no-restricted-block'?: Linter.RuleEntry<VueNoRestrictedBlock>
  /**
   * disallow asynchronously called restricted methods
   * @see https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
   */
  'vue/no-restricted-call-after-await'?: Linter.RuleEntry<VueNoRestrictedCallAfterAwait>
  /**
   * disallow specific classes in Vue components
   * @see https://eslint.vuejs.org/rules/no-restricted-class.html
   */
  'vue/no-restricted-class'?: Linter.RuleEntry<VueNoRestrictedClass>
  /**
   * disallow specific component names
   * @see https://eslint.vuejs.org/rules/no-restricted-component-names.html
   */
  'vue/no-restricted-component-names'?: Linter.RuleEntry<VueNoRestrictedComponentNames>
  /**
   * disallow specific component option
   * @see https://eslint.vuejs.org/rules/no-restricted-component-options.html
   */
  'vue/no-restricted-component-options'?: Linter.RuleEntry<VueNoRestrictedComponentOptions>
  /**
   * disallow specific custom event
   * @see https://eslint.vuejs.org/rules/no-restricted-custom-event.html
   */
  'vue/no-restricted-custom-event'?: Linter.RuleEntry<VueNoRestrictedCustomEvent>
  /**
   * disallow specific elements
   * @see https://eslint.vuejs.org/rules/no-restricted-html-elements.html
   */
  'vue/no-restricted-html-elements'?: Linter.RuleEntry<VueNoRestrictedHtmlElements>
  /**
   * disallow specific props
   * @see https://eslint.vuejs.org/rules/no-restricted-props.html
   */
  'vue/no-restricted-props'?: Linter.RuleEntry<VueNoRestrictedProps>
  /**
   * disallow specific attribute
   * @see https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
   */
  'vue/no-restricted-static-attribute'?: Linter.RuleEntry<VueNoRestrictedStaticAttribute>
  /**
   * Disallow specified syntax in `<template>`
   * @see https://eslint.vuejs.org/rules/no-restricted-syntax.html
   */
  'vue/no-restricted-syntax'?: Linter.RuleEntry<VueNoRestrictedSyntax>
  /**
   * disallow specific argument in `v-bind`
   * @see https://eslint.vuejs.org/rules/no-restricted-v-bind.html
   */
  'vue/no-restricted-v-bind'?: Linter.RuleEntry<VueNoRestrictedVBind>
  /**
   * disallow specific argument in `v-on`
   * @see https://eslint.vuejs.org/rules/no-restricted-v-on.html
   */
  'vue/no-restricted-v-on'?: Linter.RuleEntry<VueNoRestrictedVOn>
  /**
   * disallow `v-if` directives on root element
   * @see https://eslint.vuejs.org/rules/no-root-v-if.html
   */
  'vue/no-root-v-if'?: Linter.RuleEntry<[]>
  /**
   * disallow usages that lose the reactivity of `props` passed to `setup`
   * @see https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html
   */
  'vue/no-setup-props-reactivity-loss'?: Linter.RuleEntry<[]>
  /**
   * enforce component's data property to be a function
   * @see https://eslint.vuejs.org/rules/no-shared-component-data.html
   */
  'vue/no-shared-component-data'?: Linter.RuleEntry<[]>
  /**
   * disallow side effects in computed properties
   * @see https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
   */
  'vue/no-side-effects-in-computed-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow spaces around equal signs in attribute
   * @see https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
   */
  'vue/no-spaces-around-equal-signs-in-attribute'?: Linter.RuleEntry<[]>
  /**
   * Disallow sparse arrays in `<template>`
   * @see https://eslint.vuejs.org/rules/no-sparse-arrays.html
   */
  'vue/no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * disallow static inline `style` attributes
   * @see https://eslint.vuejs.org/rules/no-static-inline-styles.html
   */
  'vue/no-static-inline-styles'?: Linter.RuleEntry<VueNoStaticInlineStyles>
  /**
   * disallow `key` attribute on `<template>`
   * @see https://eslint.vuejs.org/rules/no-template-key.html
   */
  'vue/no-template-key'?: Linter.RuleEntry<[]>
  /**
   * disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://eslint.vuejs.org/rules/no-template-shadow.html
   */
  'vue/no-template-shadow'?: Linter.RuleEntry<VueNoTemplateShadow>
  /**
   * disallow target="_blank" attribute without rel="noopener noreferrer"
   * @see https://eslint.vuejs.org/rules/no-template-target-blank.html
   */
  'vue/no-template-target-blank'?: Linter.RuleEntry<VueNoTemplateTargetBlank>
  /**
   * disallow mustaches in `<textarea>`
   * @see https://eslint.vuejs.org/rules/no-textarea-mustache.html
   */
  'vue/no-textarea-mustache'?: Linter.RuleEntry<[]>
  /**
   * disallow `this` usage in a `beforeRouteEnter` method
   * @see https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
   */
  'vue/no-this-in-before-route-enter'?: Linter.RuleEntry<[]>
  /**
   * disallow use of undefined components in `<template>`
   * @see https://eslint.vuejs.org/rules/no-undef-components.html
   */
  'vue/no-undef-components'?: Linter.RuleEntry<VueNoUndefComponents>
  /**
   * disallow undefined properties
   * @see https://eslint.vuejs.org/rules/no-undef-properties.html
   */
  'vue/no-undef-properties'?: Linter.RuleEntry<VueNoUndefProperties>
  /**
   * disallow unsupported Vue.js syntax on the specified version
   * @see https://eslint.vuejs.org/rules/no-unsupported-features.html
   */
  'vue/no-unsupported-features'?: Linter.RuleEntry<VueNoUnsupportedFeatures>
  /**
   * disallow registering components that are not used inside templates
   * @see https://eslint.vuejs.org/rules/no-unused-components.html
   */
  'vue/no-unused-components'?: Linter.RuleEntry<VueNoUnusedComponents>
  /**
   * disallow unused emit declarations
   * @see https://eslint.vuejs.org/rules/no-unused-emit-declarations.html
   */
  'vue/no-unused-emit-declarations'?: Linter.RuleEntry<[]>
  /**
   * disallow unused properties
   * @see https://eslint.vuejs.org/rules/no-unused-properties.html
   */
  'vue/no-unused-properties'?: Linter.RuleEntry<VueNoUnusedProperties>
  /**
   * disallow unused refs
   * @see https://eslint.vuejs.org/rules/no-unused-refs.html
   */
  'vue/no-unused-refs'?: Linter.RuleEntry<[]>
  /**
   * disallow unused variable definitions of v-for directives or scope attributes
   * @see https://eslint.vuejs.org/rules/no-unused-vars.html
   */
  'vue/no-unused-vars'?: Linter.RuleEntry<VueNoUnusedVars>
  /**
   * disallow use computed property like method
   * @see https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
   */
  'vue/no-use-computed-property-like-method'?: Linter.RuleEntry<[]>
  /**
   * disallow using `v-else-if`/`v-else` on the same element as `v-for`
   * @see https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html
   */
  'vue/no-use-v-else-with-v-for'?: Linter.RuleEntry<[]>
  /**
   * disallow using `v-if` on the same element as `v-for`
   * @see https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
   */
  'vue/no-use-v-if-with-v-for'?: Linter.RuleEntry<VueNoUseVIfWithVFor>
  /**
   * Disallow unnecessary concatenation of literals or template literals in `<template>`
   * @see https://eslint.vuejs.org/rules/no-useless-concat.html
   */
  'vue/no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary mustache interpolations
   * @see https://eslint.vuejs.org/rules/no-useless-mustaches.html
   */
  'vue/no-useless-mustaches'?: Linter.RuleEntry<VueNoUselessMustaches>
  /**
   * disallow useless attribute on `<template>`
   * @see https://eslint.vuejs.org/rules/no-useless-template-attributes.html
   */
  'vue/no-useless-template-attributes'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `v-bind` directives
   * @see https://eslint.vuejs.org/rules/no-useless-v-bind.html
   */
  'vue/no-useless-v-bind'?: Linter.RuleEntry<VueNoUselessVBind>
  /**
   * disallow `key` attribute on `<template v-for>`
   * @see https://eslint.vuejs.org/rules/no-v-for-template-key.html
   * @deprecated
   */
  'vue/no-v-for-template-key'?: Linter.RuleEntry<[]>
  /**
   * disallow key of `<template v-for>` placed on child elements
   * @see https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
   */
  'vue/no-v-for-template-key-on-child'?: Linter.RuleEntry<[]>
  /**
   * disallow use of v-html to prevent XSS attack
   * @see https://eslint.vuejs.org/rules/no-v-html.html
   */
  'vue/no-v-html'?: Linter.RuleEntry<VueNoVHtml>
  /**
   * disallow adding an argument to `v-model` used in custom component
   * @see https://eslint.vuejs.org/rules/no-v-model-argument.html
   * @deprecated
   */
  'vue/no-v-model-argument'?: Linter.RuleEntry<[]>
  /**
   * disallow use of v-text
   * @see https://eslint.vuejs.org/rules/no-v-text.html
   */
  'vue/no-v-text'?: Linter.RuleEntry<[]>
  /**
   * disallow v-text / v-html on component
   * @see https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
   */
  'vue/no-v-text-v-html-on-component'?: Linter.RuleEntry<VueNoVTextVHtmlOnComponent>
  /**
   * disallow asynchronously registered `watch`
   * @see https://eslint.vuejs.org/rules/no-watch-after-await.html
   */
  'vue/no-watch-after-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent line breaks after opening and before closing braces in `<template>`
   * @see https://eslint.vuejs.org/rules/object-curly-newline.html
   */
  'vue/object-curly-newline'?: Linter.RuleEntry<VueObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces in `<template>`
   * @see https://eslint.vuejs.org/rules/object-curly-spacing.html
   */
  'vue/object-curly-spacing'?: Linter.RuleEntry<VueObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines in `<template>`
   * @see https://eslint.vuejs.org/rules/object-property-newline.html
   */
  'vue/object-property-newline'?: Linter.RuleEntry<VueObjectPropertyNewline>
  /**
   * Require or disallow method and property shorthand syntax for object literals in `<template>`
   * @see https://eslint.vuejs.org/rules/object-shorthand.html
   */
  'vue/object-shorthand'?: Linter.RuleEntry<VueObjectShorthand>
  /**
   * enforce that each component should be in its own file
   * @see https://eslint.vuejs.org/rules/one-component-per-file.html
   */
  'vue/one-component-per-file'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent linebreak style for operators in `<template>`
   * @see https://eslint.vuejs.org/rules/operator-linebreak.html
   */
  'vue/operator-linebreak'?: Linter.RuleEntry<VueOperatorLinebreak>
  /**
   * enforce order of properties in components
   * @see https://eslint.vuejs.org/rules/order-in-components.html
   */
  'vue/order-in-components'?: Linter.RuleEntry<VueOrderInComponents>
  /**
   * require or disallow padding lines between blocks
   * @see https://eslint.vuejs.org/rules/padding-line-between-blocks.html
   */
  'vue/padding-line-between-blocks'?: Linter.RuleEntry<VuePaddingLineBetweenBlocks>
  /**
   * require or disallow newlines between sibling tags in template
   * @see https://eslint.vuejs.org/rules/padding-line-between-tags.html
   */
  'vue/padding-line-between-tags'?: Linter.RuleEntry<VuePaddingLineBetweenTags>
  /**
   * require or disallow padding lines in component definition
   * @see https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html
   */
  'vue/padding-lines-in-component-definition'?: Linter.RuleEntry<VuePaddingLinesInComponentDefinition>
  /**
   * enforce use of `defineOptions` instead of default export
   * @see https://eslint.vuejs.org/rules/prefer-define-options.html
   */
  'vue/prefer-define-options'?: Linter.RuleEntry<[]>
  /**
   * enforce import from 'vue' instead of import from '@vue/*'
   * @see https://eslint.vuejs.org/rules/prefer-import-from-vue.html
   */
  'vue/prefer-import-from-vue'?: Linter.RuleEntry<[]>
  /**
   * enforce `Boolean` comes first in component prop types
   * @see https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html
   */
  'vue/prefer-prop-type-boolean-first'?: Linter.RuleEntry<[]>
  /**
   * require static class names in template to be in a separate `class` attribute
   * @see https://eslint.vuejs.org/rules/prefer-separate-static-class.html
   */
  'vue/prefer-separate-static-class'?: Linter.RuleEntry<[]>
  /**
   * Require template literals instead of string concatenation in `<template>`
   * @see https://eslint.vuejs.org/rules/prefer-template.html
   */
  'vue/prefer-template'?: Linter.RuleEntry<[]>
  /**
   * require shorthand form attribute when `v-bind` value is `true`
   * @see https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
   */
  'vue/prefer-true-attribute-shorthand'?: Linter.RuleEntry<VuePreferTrueAttributeShorthand>
  /**
   * require using `useTemplateRef` instead of `ref`/`shallowRef` for template refs
   * @see https://eslint.vuejs.org/rules/prefer-use-template-ref.html
   */
  'vue/prefer-use-template-ref'?: Linter.RuleEntry<[]>
  /**
   * enforce specific casing for the Prop name in Vue components
   * @see https://eslint.vuejs.org/rules/prop-name-casing.html
   */
  'vue/prop-name-casing'?: Linter.RuleEntry<VuePropNameCasing>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names in `<template>`
   * @see https://eslint.vuejs.org/rules/quote-props.html
   */
  'vue/quote-props'?: Linter.RuleEntry<VueQuoteProps>
  /**
   * require `v-bind:is` of `<component>` elements
   * @see https://eslint.vuejs.org/rules/require-component-is.html
   */
  'vue/require-component-is'?: Linter.RuleEntry<[]>
  /**
   * require components to be the default export
   * @see https://eslint.vuejs.org/rules/require-default-export.html
   */
  'vue/require-default-export'?: Linter.RuleEntry<[]>
  /**
   * require default value for props
   * @see https://eslint.vuejs.org/rules/require-default-prop.html
   */
  'vue/require-default-prop'?: Linter.RuleEntry<[]>
  /**
   * require the component to be directly exported
   * @see https://eslint.vuejs.org/rules/require-direct-export.html
   */
  'vue/require-direct-export'?: Linter.RuleEntry<VueRequireDirectExport>
  /**
   * require type definitions in emits
   * @see https://eslint.vuejs.org/rules/require-emit-validator.html
   */
  'vue/require-emit-validator'?: Linter.RuleEntry<[]>
  /**
   * require `emits` option with name triggered by `$emit()`
   * @see https://eslint.vuejs.org/rules/require-explicit-emits.html
   */
  'vue/require-explicit-emits'?: Linter.RuleEntry<VueRequireExplicitEmits>
  /**
   * require slots to be explicitly defined
   * @see https://eslint.vuejs.org/rules/require-explicit-slots.html
   */
  'vue/require-explicit-slots'?: Linter.RuleEntry<[]>
  /**
   * require declare public properties using `expose`
   * @see https://eslint.vuejs.org/rules/require-expose.html
   */
  'vue/require-expose'?: Linter.RuleEntry<[]>
  /**
   * require a certain macro variable name
   * @see https://eslint.vuejs.org/rules/require-macro-variable-name.html
   */
  'vue/require-macro-variable-name'?: Linter.RuleEntry<VueRequireMacroVariableName>
  /**
   * require a name property in Vue components
   * @see https://eslint.vuejs.org/rules/require-name-property.html
   */
  'vue/require-name-property'?: Linter.RuleEntry<[]>
  /**
   * require props to have a comment
   * @see https://eslint.vuejs.org/rules/require-prop-comment.html
   */
  'vue/require-prop-comment'?: Linter.RuleEntry<VueRequirePropComment>
  /**
   * require prop type to be a constructor
   * @see https://eslint.vuejs.org/rules/require-prop-type-constructor.html
   */
  'vue/require-prop-type-constructor'?: Linter.RuleEntry<[]>
  /**
   * require type definitions in props
   * @see https://eslint.vuejs.org/rules/require-prop-types.html
   */
  'vue/require-prop-types'?: Linter.RuleEntry<[]>
  /**
   * enforce render function to always return value
   * @see https://eslint.vuejs.org/rules/require-render-return.html
   */
  'vue/require-render-return'?: Linter.RuleEntry<[]>
  /**
   * enforce properties of `$slots` to be used as a function
   * @see https://eslint.vuejs.org/rules/require-slots-as-functions.html
   */
  'vue/require-slots-as-functions'?: Linter.RuleEntry<[]>
  /**
   * require control the display of the content inside `<transition>`
   * @see https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
   */
  'vue/require-toggle-inside-transition'?: Linter.RuleEntry<VueRequireToggleInsideTransition>
  /**
   * enforce adding type declarations to object props
   * @see https://eslint.vuejs.org/rules/require-typed-object-prop.html
   */
  'vue/require-typed-object-prop'?: Linter.RuleEntry<[]>
  /**
   * require `ref` and `shallowRef` functions to be strongly typed
   * @see https://eslint.vuejs.org/rules/require-typed-ref.html
   */
  'vue/require-typed-ref'?: Linter.RuleEntry<[]>
  /**
   * require `v-bind:key` with `v-for` directives
   * @see https://eslint.vuejs.org/rules/require-v-for-key.html
   */
  'vue/require-v-for-key'?: Linter.RuleEntry<[]>
  /**
   * enforce props default values to be valid
   * @see https://eslint.vuejs.org/rules/require-valid-default-prop.html
   */
  'vue/require-valid-default-prop'?: Linter.RuleEntry<[]>
  /**
   * enforce using only specific component names
   * @see https://eslint.vuejs.org/rules/restricted-component-names.html
   */
  'vue/restricted-component-names'?: Linter.RuleEntry<VueRestrictedComponentNames>
  /**
   * enforce that a return statement is present in computed property
   * @see https://eslint.vuejs.org/rules/return-in-computed-property.html
   */
  'vue/return-in-computed-property'?: Linter.RuleEntry<VueReturnInComputedProperty>
  /**
   * enforce that a return statement is present in emits validator
   * @see https://eslint.vuejs.org/rules/return-in-emits-validator.html
   */
  'vue/return-in-emits-validator'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent indentation in `<script>`
   * @see https://eslint.vuejs.org/rules/script-indent.html
   */
  'vue/script-indent'?: Linter.RuleEntry<VueScriptIndent>
  /**
   * require a line break before and after the contents of a singleline element
   * @see https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
   */
  'vue/singleline-html-element-content-newline'?: Linter.RuleEntry<VueSinglelineHtmlElementContentNewline>
  /**
   * enforce specific casing for slot names
   * @see https://eslint.vuejs.org/rules/slot-name-casing.html
   */
  'vue/slot-name-casing'?: Linter.RuleEntry<VueSlotNameCasing>
  /**
   * enforce sort-keys in a manner that is compatible with order-in-components
   * @see https://eslint.vuejs.org/rules/sort-keys.html
   */
  'vue/sort-keys'?: Linter.RuleEntry<VueSortKeys>
  /**
   * Enforce consistent spacing inside parentheses in `<template>`
   * @see https://eslint.vuejs.org/rules/space-in-parens.html
   */
  'vue/space-in-parens'?: Linter.RuleEntry<VueSpaceInParens>
  /**
   * Require spacing around infix operators in `<template>`
   * @see https://eslint.vuejs.org/rules/space-infix-ops.html
   */
  'vue/space-infix-ops'?: Linter.RuleEntry<VueSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators in `<template>`
   * @see https://eslint.vuejs.org/rules/space-unary-ops.html
   */
  'vue/space-unary-ops'?: Linter.RuleEntry<VueSpaceUnaryOps>
  /**
   * enforce static class names order
   * @see https://eslint.vuejs.org/rules/static-class-names-order.html
   */
  'vue/static-class-names-order'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around embedded expressions of template strings in `<template>`
   * @see https://eslint.vuejs.org/rules/template-curly-spacing.html
   */
  'vue/template-curly-spacing'?: Linter.RuleEntry<VueTemplateCurlySpacing>
  /**
   * disallow usage of `this` in template
   * @see https://eslint.vuejs.org/rules/this-in-template.html
   */
  'vue/this-in-template'?: Linter.RuleEntry<VueThisInTemplate>
  /**
   * enforce usage of `exact` modifier on `v-on`
   * @see https://eslint.vuejs.org/rules/use-v-on-exact.html
   */
  'vue/use-v-on-exact'?: Linter.RuleEntry<[]>
  /**
   * enforce `v-bind` directive style
   * @see https://eslint.vuejs.org/rules/v-bind-style.html
   */
  'vue/v-bind-style'?: Linter.RuleEntry<VueVBindStyle>
  /**
   * enforce `v-for` directive's delimiter style
   * @see https://eslint.vuejs.org/rules/v-for-delimiter-style.html
   */
  'vue/v-for-delimiter-style'?: Linter.RuleEntry<VueVForDelimiterStyle>
  /**
   * require key attribute for conditionally rendered repeated components
   * @see https://eslint.vuejs.org/rules/v-if-else-key.html
   */
  'vue/v-if-else-key'?: Linter.RuleEntry<[]>
  /**
   * enforce v-on event naming style on custom components in template
   * @see https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
   */
  'vue/v-on-event-hyphenation'?: Linter.RuleEntry<VueVOnEventHyphenation>
  /**
   * enforce writing style for handlers in `v-on` directives
   * @see https://eslint.vuejs.org/rules/v-on-handler-style.html
   */
  'vue/v-on-handler-style'?: Linter.RuleEntry<VueVOnHandlerStyle>
  /**
   * enforce `v-on` directive style
   * @see https://eslint.vuejs.org/rules/v-on-style.html
   */
  'vue/v-on-style'?: Linter.RuleEntry<VueVOnStyle>
  /**
   * enforce `v-slot` directive style
   * @see https://eslint.vuejs.org/rules/v-slot-style.html
   */
  'vue/v-slot-style'?: Linter.RuleEntry<VueVSlotStyle>
  /**
   * require valid attribute names
   * @see https://eslint.vuejs.org/rules/valid-attribute-name.html
   */
  'vue/valid-attribute-name'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `defineEmits` compiler macro
   * @see https://eslint.vuejs.org/rules/valid-define-emits.html
   */
  'vue/valid-define-emits'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `defineOptions` compiler macro
   * @see https://eslint.vuejs.org/rules/valid-define-options.html
   */
  'vue/valid-define-options'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `defineProps` compiler macro
   * @see https://eslint.vuejs.org/rules/valid-define-props.html
   */
  'vue/valid-define-props'?: Linter.RuleEntry<[]>
  /**
   * require valid keys in model option
   * @see https://eslint.vuejs.org/rules/valid-model-definition.html
   * @deprecated
   */
  'vue/valid-model-definition'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `nextTick` function calls
   * @see https://eslint.vuejs.org/rules/valid-next-tick.html
   */
  'vue/valid-next-tick'?: Linter.RuleEntry<[]>
  /**
   * enforce valid template root
   * @see https://eslint.vuejs.org/rules/valid-template-root.html
   */
  'vue/valid-template-root'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-bind` directives
   * @see https://eslint.vuejs.org/rules/valid-v-bind.html
   */
  'vue/valid-v-bind'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `.sync` modifier on `v-bind` directives
   * @see https://eslint.vuejs.org/rules/valid-v-bind-sync.html
   * @deprecated
   */
  'vue/valid-v-bind-sync'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-cloak` directives
   * @see https://eslint.vuejs.org/rules/valid-v-cloak.html
   */
  'vue/valid-v-cloak'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-else` directives
   * @see https://eslint.vuejs.org/rules/valid-v-else.html
   */
  'vue/valid-v-else'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-else-if` directives
   * @see https://eslint.vuejs.org/rules/valid-v-else-if.html
   */
  'vue/valid-v-else-if'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-for` directives
   * @see https://eslint.vuejs.org/rules/valid-v-for.html
   */
  'vue/valid-v-for'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-html` directives
   * @see https://eslint.vuejs.org/rules/valid-v-html.html
   */
  'vue/valid-v-html'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-if` directives
   * @see https://eslint.vuejs.org/rules/valid-v-if.html
   */
  'vue/valid-v-if'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-is` directives
   * @see https://eslint.vuejs.org/rules/valid-v-is.html
   */
  'vue/valid-v-is'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-memo` directives
   * @see https://eslint.vuejs.org/rules/valid-v-memo.html
   */
  'vue/valid-v-memo'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-model` directives
   * @see https://eslint.vuejs.org/rules/valid-v-model.html
   */
  'vue/valid-v-model'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-on` directives
   * @see https://eslint.vuejs.org/rules/valid-v-on.html
   */
  'vue/valid-v-on'?: Linter.RuleEntry<VueValidVOn>
  /**
   * enforce valid `v-once` directives
   * @see https://eslint.vuejs.org/rules/valid-v-once.html
   */
  'vue/valid-v-once'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-pre` directives
   * @see https://eslint.vuejs.org/rules/valid-v-pre.html
   */
  'vue/valid-v-pre'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-show` directives
   * @see https://eslint.vuejs.org/rules/valid-v-show.html
   */
  'vue/valid-v-show'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-slot` directives
   * @see https://eslint.vuejs.org/rules/valid-v-slot.html
   */
  'vue/valid-v-slot'?: Linter.RuleEntry<VueValidVSlot>
  /**
   * enforce valid `v-text` directives
   * @see https://eslint.vuejs.org/rules/valid-v-text.html
   */
  'vue/valid-v-text'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- @stylistic/array-bracket-newline -----
type StylisticArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- @stylistic/array-bracket-spacing -----
type StylisticArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- @stylistic/array-element-newline -----
type StylisticArrayElementNewline = []|[(_StylisticArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StylisticArrayElementNewlineBasicConfig
  ArrayPattern?: _StylisticArrayElementNewlineBasicConfig
})]
type _StylisticArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- @stylistic/arrow-parens -----
type StylisticArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- @stylistic/arrow-spacing -----
type StylisticArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/block-spacing -----
type StylisticBlockSpacing = []|[("always" | "never")]
// ----- @stylistic/brace-style -----
type StylisticBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- @stylistic/comma-dangle -----
type StylisticCommaDangle = []|[(_StylisticCommaDangleValue | {
  arrays?: _StylisticCommaDangleValueWithIgnore
  objects?: _StylisticCommaDangleValueWithIgnore
  imports?: _StylisticCommaDangleValueWithIgnore
  exports?: _StylisticCommaDangleValueWithIgnore
  functions?: _StylisticCommaDangleValueWithIgnore
  importAttributes?: _StylisticCommaDangleValueWithIgnore
  dynamicImports?: _StylisticCommaDangleValueWithIgnore
  enums?: _StylisticCommaDangleValueWithIgnore
  generics?: _StylisticCommaDangleValueWithIgnore
  tuples?: _StylisticCommaDangleValueWithIgnore
})]
type _StylisticCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _StylisticCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- @stylistic/comma-spacing -----
type StylisticCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/comma-style -----
type StylisticCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/computed-property-spacing -----
type StylisticComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- @stylistic/curly-newline -----
type StylisticCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]
// ----- @stylistic/dot-location -----
type StylisticDotLocation = []|[("object" | "property")]
// ----- @stylistic/eol-last -----
type StylisticEolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- @stylistic/function-call-argument-newline -----
type StylisticFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- @stylistic/function-call-spacing -----
type StylisticFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-paren-newline -----
type StylisticFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- @stylistic/generator-star-spacing -----
type StylisticGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  shorthand?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- @stylistic/implicit-arrow-linebreak -----
type StylisticImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- @stylistic/indent -----
type StylisticIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
    using?: (number | ("first" | "off"))
  })
  assignmentOperator?: (number | "off")
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- @stylistic/indent-binary-ops -----
type StylisticIndentBinaryOps = []|[(number | "tab")]
// ----- @stylistic/jsx-closing-bracket-location -----
type StylisticJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]
// ----- @stylistic/jsx-closing-tag-location -----
type StylisticJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]
// ----- @stylistic/jsx-curly-brace-presence -----
type StylisticJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- @stylistic/jsx-curly-newline -----
type StylisticJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- @stylistic/jsx-curly-spacing -----
type StylisticJsxCurlySpacing = []|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never"))]|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
}]
// ----- @stylistic/jsx-equals-spacing -----
type StylisticJsxEqualsSpacing = []|[("always" | "never")]
// ----- @stylistic/jsx-first-prop-new-line -----
type StylisticJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- @stylistic/jsx-function-call-newline -----
type StylisticJsxFunctionCallNewline = []|[("always" | "multiline")]
// ----- @stylistic/jsx-indent -----
type StylisticJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- @stylistic/jsx-indent-props -----
type StylisticJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
})]
// ----- @stylistic/jsx-max-props-per-line -----
type StylisticJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- @stylistic/jsx-newline -----
type StylisticJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- @stylistic/jsx-one-expression-per-line -----
type StylisticJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]
// ----- @stylistic/jsx-pascal-case -----
type StylisticJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]
// ----- @stylistic/jsx-quotes -----
type StylisticJsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- @stylistic/jsx-self-closing-comp -----
type StylisticJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- @stylistic/jsx-sort-props -----
type StylisticJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (string[] | boolean)
  reservedLast?: string[]
  locale?: string
}]
// ----- @stylistic/jsx-tag-spacing -----
type StylisticJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- @stylistic/jsx-wrap-multilines -----
type StylisticJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]
// ----- @stylistic/key-spacing -----
type StylisticKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- @stylistic/keyword-spacing -----
type StylisticKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    arguments?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    eval?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
    using?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    accessor?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- @stylistic/line-comment-position -----
type StylisticLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- @stylistic/linebreak-style -----
type StylisticLinebreakStyle = []|[("unix" | "windows")]
// ----- @stylistic/lines-around-comment -----
type StylisticLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- @stylistic/lines-between-class-members -----
type StylisticLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- @stylistic/max-len -----
type StylisticMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- @stylistic/max-statements-per-line -----
type StylisticMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]
// ----- @stylistic/member-delimiter-style -----
type StylisticMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StylisticMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- @stylistic/multiline-comment-style -----
type StylisticMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
  checkExclamation?: boolean
}])
// ----- @stylistic/multiline-ternary -----
type StylisticMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
}]
// ----- @stylistic/new-parens -----
type StylisticNewParens = []|[("always" | "never")]
// ----- @stylistic/newline-per-chained-call -----
type StylisticNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- @stylistic/no-confusing-arrow -----
type StylisticNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- @stylistic/no-extra-parens -----
type StylisticNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
  allowNodesInSpreadElement?: {
    ConditionalExpression?: boolean
    LogicalExpression?: boolean
    AwaitExpression?: boolean
  }
  ignoredNodes?: string[]
}])
// ----- @stylistic/no-mixed-operators -----
type StylisticNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- @stylistic/no-mixed-spaces-and-tabs -----
type StylisticNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]
// ----- @stylistic/no-multi-spaces -----
type StylisticNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]
// ----- @stylistic/no-multiple-empty-lines -----
type StylisticNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- @stylistic/no-tabs -----
type StylisticNoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- @stylistic/no-trailing-spaces -----
type StylisticNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- @stylistic/nonblock-statement-body-position -----
type StylisticNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- @stylistic/object-curly-newline -----
type StylisticObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- @stylistic/object-curly-spacing -----
type StylisticObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  overrides?: {
    ObjectPattern?: ("always" | "never")
    ObjectExpression?: ("always" | "never")
    ImportDeclaration?: ("always" | "never")
    ImportAttributes?: ("always" | "never")
    ExportNamedDeclaration?: ("always" | "never")
    ExportAllDeclaration?: ("always" | "never")
    TSMappedType?: ("always" | "never")
    TSTypeLiteral?: ("always" | "never")
    TSInterfaceBody?: ("always" | "never")
    TSEnumBody?: ("always" | "never")
  }
}]
// ----- @stylistic/object-property-newline -----
type StylisticObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]
// ----- @stylistic/one-var-declaration-per-line -----
type StylisticOneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- @stylistic/operator-linebreak -----
type StylisticOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- @stylistic/padded-blocks -----
type StylisticPaddedBlocks = []|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
})]|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- @stylistic/padding-line-between-statements -----
type _StylisticPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _StylisticPaddingLineBetweenStatementsStatementOption = (_StylisticPaddingLineBetweenStatementsStatementType | [_StylisticPaddingLineBetweenStatementsStatementType, ...(_StylisticPaddingLineBetweenStatementsStatementType)[]])
type _StylisticPaddingLineBetweenStatementsStatementType = ("*" | "exports" | "require" | "directive" | "iife" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "continue" | "debugger" | "default" | "do" | "for" | "if" | "import" | "switch" | "throw" | "try" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "function-overload" | "block-like" | "singleline-block-like" | "multiline-block-like" | "expression" | "singleline-expression" | "multiline-expression" | "return" | "singleline-return" | "multiline-return" | "export" | "singleline-export" | "multiline-export" | "var" | "singleline-var" | "multiline-var" | "let" | "singleline-let" | "multiline-let" | "const" | "singleline-const" | "multiline-const" | "using" | "singleline-using" | "multiline-using" | "type" | "singleline-type" | "multiline-type")
type StylisticPaddingLineBetweenStatements = {
  blankLine: _StylisticPaddingLineBetweenStatementsPaddingType
  prev: _StylisticPaddingLineBetweenStatementsStatementOption
  next: _StylisticPaddingLineBetweenStatementsStatementOption
}[]
// ----- @stylistic/quote-props -----
type StylisticQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- @stylistic/quotes -----
type StylisticQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]
// ----- @stylistic/rest-spread-spacing -----
type StylisticRestSpreadSpacing = []|[("always" | "never")]
// ----- @stylistic/semi -----
type StylisticSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- @stylistic/semi-spacing -----
type StylisticSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/semi-style -----
type StylisticSemiStyle = []|[("last" | "first")]
// ----- @stylistic/space-before-blocks -----
type StylisticSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
  modules?: ("always" | "never" | "off")
})]
// ----- @stylistic/space-before-function-paren -----
type StylisticSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
  catch?: ("always" | "never" | "ignore")
})]
// ----- @stylistic/space-in-parens -----
type StylisticSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- @stylistic/space-infix-ops -----
type StylisticSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]
// ----- @stylistic/space-unary-ops -----
type StylisticSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/spaced-comment -----
type StylisticSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- @stylistic/switch-colon-spacing -----
type StylisticSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/template-curly-spacing -----
type StylisticTemplateCurlySpacing = []|[("always" | "never")]
// ----- @stylistic/template-tag-spacing -----
type StylisticTemplateTagSpacing = []|[("always" | "never")]
// ----- @stylistic/type-annotation-spacing -----
type StylisticTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTypeAnnotationSpacing_SpacingConfig
    arrow?: _StylisticTypeAnnotationSpacing_SpacingConfig
    variable?: _StylisticTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StylisticTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- @stylistic/wrap-iife -----
type StylisticWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- @stylistic/yield-star-spacing -----
type StylisticYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- perfectionist/sort-array-includes -----
type PerfectionistSortArrayIncludes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("literal" | "spread")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("literal" | "spread")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-classes -----
type PerfectionistSortClasses = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      
      decoratorNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    
    decoratorNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  ignoreCallbackDependenciesPatterns?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-decorators -----
type PerfectionistSortDecorators = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  sortOnParameters?: boolean
  
  sortOnProperties?: boolean
  
  sortOnAccessors?: boolean
  
  sortOnMethods?: boolean
  
  sortOnClasses?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-enums -----
type PerfectionistSortEnums = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  forceNumericSort?: boolean
  
  sortByValue?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-exports -----
type PerfectionistSortExports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "export"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "export"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-heritage-clauses -----
type PerfectionistSortHeritageClauses = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-imports -----
type PerfectionistSortImports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    
    value?: {
      [k: string]: (string | string[]) | undefined
    }
    
    type?: {
      [k: string]: (string | string[]) | undefined
    }
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
      
      selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
    
    selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  tsconfig?: {
    
    rootDir: string
    
    filename?: string
  }
  
  maxLineLength?: number
  
  sortSideEffects?: boolean
  
  environment?: ("node" | "bun")
  
  tsconfigRootDir?: string
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  internalPattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-interfaces -----
type PerfectionistSortInterfaces = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    declarationMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-intersection-types -----
type PerfectionistSortIntersectionTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-jsx-props -----
type PerfectionistSortJsxProps = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("shorthand" | "multiline")[]
      
      selector?: ("multiline" | "prop" | "shorthand")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("shorthand" | "multiline")[]
    
    selector?: ("multiline" | "prop" | "shorthand")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    tagMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-maps -----
type PerfectionistSortMaps = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-modules -----
type PerfectionistSortModules = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      
      decoratorNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
    
    selector?: ("enum" | "function" | "interface" | "type" | "class")
    
    decoratorNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-named-exports -----
type PerfectionistSortNamedExports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "export"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "export"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-named-imports -----
type PerfectionistSortNamedImports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "import"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "import"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-object-types -----
type PerfectionistSortObjectTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    declarationMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-objects -----
type PerfectionistSortObjects = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  destructuredObjects?: (boolean | {
    
    groups?: boolean
  })
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    callingFunctionNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  destructureOnly?: boolean
  
  objectDeclarations?: boolean
  
  styledComponents?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-sets -----
type PerfectionistSortSets = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("literal" | "spread")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("literal" | "spread")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-switch-case -----
type PerfectionistSortSwitchCase = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
}]
// ----- perfectionist/sort-union-types -----
type PerfectionistSortUnionTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-variable-declarations -----
type PerfectionistSortVariableDeclarations = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("initialized" | "uninitialized")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("initialized" | "uninitialized")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- vue/array-bracket-newline -----
type VueArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- vue/array-bracket-spacing -----
type VueArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- vue/array-element-newline -----
type VueArrayElementNewline = []|[(_VueArrayElementNewlineBasicConfig | {
  ArrayExpression?: _VueArrayElementNewlineBasicConfig
  ArrayPattern?: _VueArrayElementNewlineBasicConfig
})]
type _VueArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- vue/arrow-spacing -----
type VueArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- vue/attribute-hyphenation -----
type VueAttributeHyphenation = []|[("always" | "never")]|[("always" | "never"), {
  ignore?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
  ignoreTags?: string[]
}]
// ----- vue/attributes-order -----
type VueAttributesOrder = []|[{
  order?: (("DEFINITION" | "LIST_RENDERING" | "CONDITIONALS" | "RENDER_MODIFIERS" | "GLOBAL" | "UNIQUE" | "SLOT" | "TWO_WAY_BINDING" | "OTHER_DIRECTIVES" | "OTHER_ATTR" | "ATTR_STATIC" | "ATTR_DYNAMIC" | "ATTR_SHORTHAND_BOOL" | "EVENTS" | "CONTENT") | ("DEFINITION" | "LIST_RENDERING" | "CONDITIONALS" | "RENDER_MODIFIERS" | "GLOBAL" | "UNIQUE" | "SLOT" | "TWO_WAY_BINDING" | "OTHER_DIRECTIVES" | "OTHER_ATTR" | "ATTR_STATIC" | "ATTR_DYNAMIC" | "ATTR_SHORTHAND_BOOL" | "EVENTS" | "CONTENT")[])[]
  alphabetical?: boolean
  sortLineLength?: boolean
}]
// ----- vue/block-lang -----
type VueBlockLang = []|[{
  [k: string]: {
    lang?: (string | string[])
    allowNoLang?: boolean
  }
}]
// ----- vue/block-order -----
type VueBlockOrder = []|[{
  order?: (string | string[])[]
}]
// ----- vue/block-spacing -----
type VueBlockSpacing = []|[("always" | "never")]
// ----- vue/block-tag-newline -----
type VueBlockTagNewline = []|[{
  singleline?: ("always" | "never" | "consistent" | "ignore")
  multiline?: ("always" | "never" | "consistent" | "ignore")
  maxEmptyLines?: number
  blocks?: {
    [k: string]: {
      singleline?: ("always" | "never" | "consistent" | "ignore")
      multiline?: ("always" | "never" | "consistent" | "ignore")
      maxEmptyLines?: number
    }
  }
}]
// ----- vue/brace-style -----
type VueBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- vue/camelcase -----
type VueCamelcase = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  
  allow?: string[]
}]
// ----- vue/comma-dangle -----
type VueCommaDangle = []|[(_VueCommaDangleValue | {
  arrays?: _VueCommaDangleValueWithIgnore
  objects?: _VueCommaDangleValueWithIgnore
  imports?: _VueCommaDangleValueWithIgnore
  exports?: _VueCommaDangleValueWithIgnore
  functions?: _VueCommaDangleValueWithIgnore
  importAttributes?: _VueCommaDangleValueWithIgnore
  dynamicImports?: _VueCommaDangleValueWithIgnore
  enums?: _VueCommaDangleValueWithIgnore
  generics?: _VueCommaDangleValueWithIgnore
  tuples?: _VueCommaDangleValueWithIgnore
})]
type _VueCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _VueCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- vue/comma-spacing -----
type VueCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- vue/comma-style -----
type VueCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- vue/comment-directive -----
type VueCommentDirective = []|[{
  reportUnusedDisableDirectives?: boolean
}]
// ----- vue/component-api-style -----
type VueComponentApiStyle = []|[[("script-setup" | "composition" | "composition-vue2" | "options"), ...(("script-setup" | "composition" | "composition-vue2" | "options"))[]]]
// ----- vue/component-definition-name-casing -----
type VueComponentDefinitionNameCasing = []|[("PascalCase" | "kebab-case")]
// ----- vue/component-name-in-template-casing -----
type VueComponentNameInTemplateCasing = []|[("PascalCase" | "kebab-case")]|[("PascalCase" | "kebab-case"), {
  globals?: string[]
  ignores?: string[]
  registeredComponentsOnly?: boolean
}]
// ----- vue/component-options-name-casing -----
type VueComponentOptionsNameCasing = []|[("camelCase" | "kebab-case" | "PascalCase")]
// ----- vue/custom-event-name-casing -----
type VueCustomEventNameCasing = []|[("kebab-case" | "camelCase")]|[("kebab-case" | "camelCase"), {
  ignores?: string[]
}]
// ----- vue/define-emits-declaration -----
type VueDefineEmitsDeclaration = []|[("type-based" | "type-literal" | "runtime")]
// ----- vue/define-macros-order -----
type VueDefineMacrosOrder = []|[{
  order?: string[]
  defineExposeLast?: boolean
}]
// ----- vue/define-props-declaration -----
type VueDefinePropsDeclaration = []|[("type-based" | "runtime")]
// ----- vue/define-props-destructuring -----
type VueDefinePropsDestructuring = []|[{
  destructure?: ("always" | "never")
}]
// ----- vue/dot-location -----
type VueDotLocation = []|[("object" | "property")]
// ----- vue/dot-notation -----
type VueDotNotation = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]
// ----- vue/enforce-style-attribute -----
type VueEnforceStyleAttribute = []|[{
  
  allow?: [("plain" | "scoped" | "module"), ...(("plain" | "scoped" | "module"))[]]
}]
// ----- vue/eqeqeq -----
type VueEqeqeq = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])
// ----- vue/first-attribute-linebreak -----
type VueFirstAttributeLinebreak = []|[{
  multiline?: ("below" | "beside" | "ignore")
  singleline?: ("below" | "beside" | "ignore")
}]
// ----- vue/func-call-spacing -----
type VueFuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- vue/html-button-has-type -----
type VueHtmlButtonHasType = []|[{
  button?: boolean
  submit?: boolean
  reset?: boolean
}]
// ----- vue/html-closing-bracket-newline -----
type VueHtmlClosingBracketNewline = []|[{
  singleline?: ("always" | "never")
  multiline?: ("always" | "never")
  selfClosingTag?: {
    singleline?: ("always" | "never")
    multiline?: ("always" | "never")
  }
}]
// ----- vue/html-closing-bracket-spacing -----
type VueHtmlClosingBracketSpacing = []|[{
  startTag?: ("always" | "never")
  endTag?: ("always" | "never")
  selfClosingTag?: ("always" | "never")
}]
// ----- vue/html-comment-content-newline -----
type VueHtmlCommentContentNewline = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
}), {
  exceptions?: string[]
}]
// ----- vue/html-comment-content-spacing -----
type VueHtmlCommentContentSpacing = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
}]
// ----- vue/html-comment-indent -----
type VueHtmlCommentIndent = []|[(number | "tab")]
// ----- vue/html-indent -----
type VueHtmlIndent = []|[(number | "tab")]|[(number | "tab"), {
  attribute?: number
  baseIndent?: number
  closeBracket?: (number | {
    startTag?: number
    endTag?: number
    selfClosingTag?: number
  })
  switchCase?: number
  alignAttributesVertically?: boolean
  ignores?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
}]
// ----- vue/html-quotes -----
type VueHtmlQuotes = []|[("double" | "single")]|[("double" | "single"), {
  avoidEscape?: boolean
}]
// ----- vue/html-self-closing -----
type VueHtmlSelfClosing = []|[{
  html?: {
    normal?: _VueHtmlSelfClosingOptionValue
    void?: _VueHtmlSelfClosingOptionValue
    component?: _VueHtmlSelfClosingOptionValue
  }
  svg?: _VueHtmlSelfClosingOptionValue
  math?: _VueHtmlSelfClosingOptionValue
}]
type _VueHtmlSelfClosingOptionValue = ("always" | "never" | "any")
// ----- vue/key-spacing -----
type VueKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- vue/keyword-spacing -----
type VueKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    arguments?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    eval?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
    using?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    accessor?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- vue/match-component-file-name -----
type VueMatchComponentFileName = []|[{
  extensions?: string[]
  shouldMatchCase?: boolean
}]
// ----- vue/max-attributes-per-line -----
type VueMaxAttributesPerLine = []|[{
  singleline?: (number | {
    max?: number
  })
  multiline?: (number | {
    max?: number
  })
}]
// ----- vue/max-len -----
type VueMaxLen = []|[({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number)]|[({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number), ({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number)]|[({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number), ({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number), {
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
}]
// ----- vue/max-lines-per-block -----
type VueMaxLinesPerBlock = []|[{
  style?: number
  template?: number
  script?: number
  skipBlankLines?: boolean
}]
// ----- vue/max-props -----
type VueMaxProps = []|[{
  maxProps?: number
}]
// ----- vue/max-template-depth -----
type VueMaxTemplateDepth = []|[{
  maxDepth?: number
}]
// ----- vue/multi-word-component-names -----
type VueMultiWordComponentNames = []|[{
  ignores?: string[]
}]
// ----- vue/multiline-html-element-content-newline -----
type VueMultilineHtmlElementContentNewline = []|[{
  ignoreWhenEmpty?: boolean
  ignores?: string[]
  allowEmptyLines?: boolean
}]
// ----- vue/multiline-ternary -----
type VueMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
}]
// ----- vue/mustache-interpolation-spacing -----
type VueMustacheInterpolationSpacing = []|[("always" | "never")]
// ----- vue/new-line-between-multi-line-property -----
type VueNewLineBetweenMultiLineProperty = []|[{
  minLineOfMultilineProperty?: number
}]
// ----- vue/next-tick-style -----
type VueNextTickStyle = []|[("promise" | "callback")]
// ----- vue/no-async-in-computed-properties -----
type VueNoAsyncInComputedProperties = []|[{
  ignoredObjectNames?: string[]
}]
// ----- vue/no-bare-strings-in-template -----
type VueNoBareStringsInTemplate = []|[{
  allowlist?: string[]
  attributes?: {
    [k: string]: string[]
  }
  directives?: string[]
}]
// ----- vue/no-boolean-default -----
type VueNoBooleanDefault = []|[("default-false" | "no-default")]
// ----- vue/no-child-content -----
type VueNoChildContent = []|[{
  
  additionalDirectives: [string, ...(string)[]]
}]
// ----- vue/no-console -----
type VueNoConsole = []|[{
  
  allow?: [string, ...(string)[]]
}]
// ----- vue/no-constant-condition -----
type VueNoConstantCondition = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]
// ----- vue/no-deprecated-model-definition -----
type VueNoDeprecatedModelDefinition = []|[{
  allowVue3Compat?: boolean
}]
// ----- vue/no-deprecated-router-link-tag-prop -----
type VueNoDeprecatedRouterLinkTagProp = []|[{
  
  components?: [string, ...(string)[]]
}]
// ----- vue/no-deprecated-slot-attribute -----
type VueNoDeprecatedSlotAttribute = []|[{
  ignore?: string[]
  ignoreParents?: string[]
}]
// ----- vue/no-dupe-keys -----
type VueNoDupeKeys = []|[{
  groups?: unknown[]
}]
// ----- vue/no-duplicate-attr-inheritance -----
type VueNoDuplicateAttrInheritance = []|[{
  checkMultiRootNodes?: boolean
}]
// ----- vue/no-duplicate-attributes -----
type VueNoDuplicateAttributes = []|[{
  allowCoexistClass?: boolean
  allowCoexistStyle?: boolean
}]
// ----- vue/no-empty-pattern -----
type VueNoEmptyPattern = []|[{
  allowObjectPatternsAsParameters?: boolean
}]
// ----- vue/no-extra-parens -----
type VueNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
  allowNodesInSpreadElement?: {
    ConditionalExpression?: boolean
    LogicalExpression?: boolean
    AwaitExpression?: boolean
  }
  ignoredNodes?: string[]
}])
// ----- vue/no-implicit-coercion -----
type VueNoImplicitCoercion = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]
// ----- vue/no-irregular-whitespace -----
type VueNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipHTMLAttributeValues?: boolean
  skipHTMLTextContents?: boolean
}]
// ----- vue/no-lone-template -----
type VueNoLoneTemplate = []|[{
  ignoreAccessible?: boolean
}]
// ----- vue/no-multi-spaces -----
type VueNoMultiSpaces = []|[{
  ignoreProperties?: boolean
}]
// ----- vue/no-multiple-template-root -----
type VueNoMultipleTemplateRoot = []|[{
  disallowComments?: boolean
}]
// ----- vue/no-mutating-props -----
type VueNoMutatingProps = []|[{
  shallowOnly?: boolean
}]
// ----- vue/no-parsing-error -----
type VueNoParsingError = []|[{
  "abrupt-closing-of-empty-comment"?: boolean
  "absence-of-digits-in-numeric-character-reference"?: boolean
  "cdata-in-html-content"?: boolean
  "character-reference-outside-unicode-range"?: boolean
  "control-character-in-input-stream"?: boolean
  "control-character-reference"?: boolean
  "eof-before-tag-name"?: boolean
  "eof-in-cdata"?: boolean
  "eof-in-comment"?: boolean
  "eof-in-tag"?: boolean
  "incorrectly-closed-comment"?: boolean
  "incorrectly-opened-comment"?: boolean
  "invalid-first-character-of-tag-name"?: boolean
  "missing-attribute-value"?: boolean
  "missing-end-tag-name"?: boolean
  "missing-semicolon-after-character-reference"?: boolean
  "missing-whitespace-between-attributes"?: boolean
  "nested-comment"?: boolean
  "noncharacter-character-reference"?: boolean
  "noncharacter-in-input-stream"?: boolean
  "null-character-reference"?: boolean
  "surrogate-character-reference"?: boolean
  "surrogate-in-input-stream"?: boolean
  "unexpected-character-in-attribute-name"?: boolean
  "unexpected-character-in-unquoted-attribute-value"?: boolean
  "unexpected-equals-sign-before-attribute-name"?: boolean
  "unexpected-null-character"?: boolean
  "unexpected-question-mark-instead-of-tag-name"?: boolean
  "unexpected-solidus-in-tag"?: boolean
  "unknown-named-character-reference"?: boolean
  "end-tag-with-attributes"?: boolean
  "duplicate-attribute"?: boolean
  "end-tag-with-trailing-solidus"?: boolean
  "non-void-html-element-start-tag-with-trailing-solidus"?: boolean
  "x-invalid-end-tag"?: boolean
  "x-invalid-namespace"?: boolean
}]
// ----- vue/no-potential-component-option-typo -----
type VueNoPotentialComponentOptionTypo = []|[{
  
  presets?: ("all" | "vue" | "vue-router" | "nuxt")[]
  
  custom?: string[]
  threshold?: number
}]
// ----- vue/no-required-prop-with-default -----
type VueNoRequiredPropWithDefault = []|[{
  autofix?: boolean
}]
// ----- vue/no-reserved-component-names -----
type VueNoReservedComponentNames = []|[{
  disallowVueBuiltInComponents?: boolean
  disallowVue3BuiltInComponents?: boolean
  htmlElementCaseSensitive?: boolean
}]
// ----- vue/no-reserved-keys -----
type VueNoReservedKeys = []|[{
  reserved?: unknown[]
  groups?: unknown[]
}]
// ----- vue/no-reserved-props -----
type VueNoReservedProps = []|[{
  vueVersion?: (2 | 3)
}]
// ----- vue/no-restricted-block -----
type VueNoRestrictedBlock = (string | {
  element: string
  message?: string
})[]
// ----- vue/no-restricted-call-after-await -----
type VueNoRestrictedCallAfterAwait = {
  module: string
  path?: (string | string[])
  message?: string
}[]
// ----- vue/no-restricted-class -----
type VueNoRestrictedClass = string[]
// ----- vue/no-restricted-component-names -----
type VueNoRestrictedComponentNames = (string | {
  name: string
  message?: string
  suggest?: string
})[]
// ----- vue/no-restricted-component-options -----
type VueNoRestrictedComponentOptions = (string | string[] | {
  name: (string | string[])
  message?: string
})[]
// ----- vue/no-restricted-custom-event -----
type VueNoRestrictedCustomEvent = (string | {
  event: string
  message?: string
  suggest?: string
})[]
// ----- vue/no-restricted-html-elements -----
type VueNoRestrictedHtmlElements = (string | {
  element: (string | string[])
  message?: string
})[]
// ----- vue/no-restricted-props -----
type VueNoRestrictedProps = (string | {
  name: string
  message?: string
  suggest?: string
})[]
// ----- vue/no-restricted-static-attribute -----
type VueNoRestrictedStaticAttribute = (string | {
  key: string
  value?: (string | true)
  element?: string
  message?: string
})[]
// ----- vue/no-restricted-syntax -----
type VueNoRestrictedSyntax = (string | {
  selector: string
  message?: string
})[]
// ----- vue/no-restricted-v-bind -----
type VueNoRestrictedVBind = ((string | null) | {
  argument: (string | null)
  modifiers?: ("prop" | "camel" | "sync" | "attr")[]
  element?: string
  message?: string
})[]
// ----- vue/no-restricted-v-on -----
type VueNoRestrictedVOn = ((string | null) | {
  argument: (string | null)
  element?: string
  message?: string
  
  modifiers?: [("prevent" | "stop" | "capture" | "self" | "once" | "passive"), ...(("prevent" | "stop" | "capture" | "self" | "once" | "passive"))[]]
})[]
// ----- vue/no-static-inline-styles -----
type VueNoStaticInlineStyles = []|[{
  allowBinding?: boolean
}]
// ----- vue/no-template-shadow -----
type VueNoTemplateShadow = []|[{
  allow?: string[]
}]
// ----- vue/no-template-target-blank -----
type VueNoTemplateTargetBlank = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
}]
// ----- vue/no-undef-components -----
type VueNoUndefComponents = []|[{
  ignorePatterns?: unknown[]
}]
// ----- vue/no-undef-properties -----
type VueNoUndefProperties = []|[{
  ignores?: string[]
}]
// ----- vue/no-unsupported-features -----
type VueNoUnsupportedFeatures = []|[{
  version?: string
  ignores?: ("slot-scope-attribute" | "dynamic-directive-arguments" | "v-slot" | "script-setup" | "style-css-vars-injection" | "v-model-argument" | "v-model-custom-modifiers" | "v-is" | "is-attribute-with-vue-prefix" | "v-memo" | "v-bind-prop-modifier-shorthand" | "v-bind-attr-modifier" | "define-options" | "define-slots" | "define-model" | "v-bind-same-name-shorthand")[]
}]
// ----- vue/no-unused-components -----
type VueNoUnusedComponents = []|[{
  ignoreWhenBindingPresent?: boolean
}]
// ----- vue/no-unused-properties -----
type VueNoUnusedProperties = []|[{
  groups?: ("props" | "data" | "asyncData" | "computed" | "methods" | "setup")[]
  deepData?: boolean
  ignorePublicMembers?: boolean
  unreferencedOptions?: ("unknownMemberAsUnreferenced" | "returnAsUnreferenced")[]
}]
// ----- vue/no-unused-vars -----
type VueNoUnusedVars = []|[{
  ignorePattern?: string
}]
// ----- vue/no-use-v-if-with-v-for -----
type VueNoUseVIfWithVFor = []|[{
  allowUsingIterationVar?: boolean
}]
// ----- vue/no-useless-mustaches -----
type VueNoUselessMustaches = []|[{
  ignoreIncludesComment?: boolean
  ignoreStringEscape?: boolean
}]
// ----- vue/no-useless-v-bind -----
type VueNoUselessVBind = []|[{
  ignoreIncludesComment?: boolean
  ignoreStringEscape?: boolean
}]
// ----- vue/no-v-html -----
type VueNoVHtml = []|[{
  ignorePattern?: string
}]
// ----- vue/no-v-text-v-html-on-component -----
type VueNoVTextVHtmlOnComponent = []|[{
  allow?: string[]
  ignoreElementNamespaces?: boolean
}]
// ----- vue/object-curly-newline -----
type VueObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- vue/object-curly-spacing -----
type VueObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  overrides?: {
    ObjectPattern?: ("always" | "never")
    ObjectExpression?: ("always" | "never")
    ImportDeclaration?: ("always" | "never")
    ImportAttributes?: ("always" | "never")
    ExportNamedDeclaration?: ("always" | "never")
    ExportAllDeclaration?: ("always" | "never")
    TSMappedType?: ("always" | "never")
    TSTypeLiteral?: ("always" | "never")
    TSInterfaceBody?: ("always" | "never")
    TSEnumBody?: ("always" | "never")
  }
}]
// ----- vue/object-property-newline -----
type VueObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]
// ----- vue/object-shorthand -----
type VueObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- vue/operator-linebreak -----
type VueOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- vue/order-in-components -----
type VueOrderInComponents = []|[{
  order?: unknown[]
}]
// ----- vue/padding-line-between-blocks -----
type VuePaddingLineBetweenBlocks = []|[("never" | "always")]
// ----- vue/padding-line-between-tags -----
type VuePaddingLineBetweenTags = []|[{
  blankLine: ("always" | "never" | "consistent")
  prev: string
  next: string
}[]]
// ----- vue/padding-lines-in-component-definition -----
type VuePaddingLinesInComponentDefinition = []|[(("always" | "never") | {
  betweenOptions?: ("never" | "always" | "ignore")
  withinOption?: (("never" | "always" | "ignore") | {
    [k: string]: (("never" | "always" | "ignore") | {
      betweenItems?: ("never" | "always" | "ignore")
      withinEach?: ("never" | "always" | "ignore")
    })
  })
  groupSingleLineProperties?: boolean
})]
// ----- vue/prefer-true-attribute-shorthand -----
type VuePreferTrueAttributeShorthand = []|[("always" | "never")]|[("always" | "never"), {
  except?: string[]
}]
// ----- vue/prop-name-casing -----
type VuePropNameCasing = []|[("camelCase" | "snake_case")]|[("camelCase" | "snake_case"), {
  ignoreProps?: string[]
}]
// ----- vue/quote-props -----
type VueQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- vue/require-direct-export -----
type VueRequireDirectExport = []|[{
  disallowFunctionalComponentFunction?: boolean
}]
// ----- vue/require-explicit-emits -----
type VueRequireExplicitEmits = []|[{
  allowProps?: boolean
}]
// ----- vue/require-macro-variable-name -----
type VueRequireMacroVariableName = []|[{
  defineProps?: string
  defineEmits?: string
  defineSlots?: string
  useSlots?: string
  useAttrs?: string
}]
// ----- vue/require-prop-comment -----
type VueRequirePropComment = []|[{
  type?: ("JSDoc" | "line" | "block" | "any")
}]
// ----- vue/require-toggle-inside-transition -----
type VueRequireToggleInsideTransition = []|[{
  additionalDirectives?: string[]
}]
// ----- vue/restricted-component-names -----
type VueRestrictedComponentNames = []|[{
  allow?: string[]
}]
// ----- vue/return-in-computed-property -----
type VueReturnInComputedProperty = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- vue/script-indent -----
type VueScriptIndent = []|[(number | "tab")]|[(number | "tab"), {
  baseIndent?: number
  switchCase?: number
  ignores?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
}]
// ----- vue/singleline-html-element-content-newline -----
type VueSinglelineHtmlElementContentNewline = []|[{
  ignoreWhenNoAttributes?: boolean
  ignoreWhenEmpty?: boolean
  ignores?: string[]
  externalIgnores?: string[]
}]
// ----- vue/slot-name-casing -----
type VueSlotNameCasing = []|[("camelCase" | "kebab-case" | "singleword")]
// ----- vue/sort-keys -----
type VueSortKeys = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  ignoreChildrenOf?: unknown[]
  ignoreGrandchildrenOf?: unknown[]
  minKeys?: number
  natural?: boolean
}]
// ----- vue/space-in-parens -----
type VueSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- vue/space-infix-ops -----
type VueSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]
// ----- vue/space-unary-ops -----
type VueSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- vue/template-curly-spacing -----
type VueTemplateCurlySpacing = []|[("always" | "never")]
// ----- vue/this-in-template -----
type VueThisInTemplate = []|[("always" | "never")]
// ----- vue/v-bind-style -----
type VueVBindStyle = []|[("shorthand" | "longform")]|[("shorthand" | "longform"), {
  sameNameShorthand?: ("always" | "never" | "ignore")
}]
// ----- vue/v-for-delimiter-style -----
type VueVForDelimiterStyle = []|[("in" | "of")]
// ----- vue/v-on-event-hyphenation -----
type VueVOnEventHyphenation = []|[("always" | "never")]|[("always" | "never"), {
  autofix?: boolean
  ignore?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
  ignoreTags?: string[]
}]
// ----- vue/v-on-handler-style -----
type VueVOnHandlerStyle = []|[(("inline" | "inline-function") | ["method", ("inline" | "inline-function")])]|[(("inline" | "inline-function") | ["method", ("inline" | "inline-function")]), {
  ignoreIncludesComment?: boolean
}]
// ----- vue/v-on-style -----
type VueVOnStyle = []|[("shorthand" | "longform")]
// ----- vue/v-slot-style -----
type VueVSlotStyle = []|[(("shorthand" | "longform") | {
  atComponent?: ("shorthand" | "longform" | "v-slot")
  default?: ("shorthand" | "longform" | "v-slot")
  named?: ("shorthand" | "longform")
})]
// ----- vue/valid-v-on -----
type VueValidVOn = []|[{
  modifiers?: unknown[]
}]
// ----- vue/valid-v-slot -----
type VueValidVSlot = []|[{
  allowModifiers?: boolean
}]