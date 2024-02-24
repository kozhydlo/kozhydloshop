'use client'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import styles from '@/styles/policy/index.module.scss'

const PrivacyPolicyPage = () => {
  const { getDefaultTextGenerator, getTextGenerator } =
    useBreadcrumbs('privacy_policy')

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.policy}>
        <h2>Тут пусто</h2>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
