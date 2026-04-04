import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { MDXComponents } from 'nextra/mdx-components'
import { StatusBadge } from '../components/StatusBadge'
const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    StatusBadge,
    ...components
  }
}
