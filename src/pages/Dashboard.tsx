import { FC } from 'react'

import { LegacyPacks } from '@/containers/LegacyPacks'
import { PackingLists } from '@/containers/PackingLists'
import { useUser } from '@/hooks/useUser'
import { useUnassignedPacks } from '@/queries/pack'

export const Dashboard: FC = () => {
  const user = useUser()
  const { data: legacyPacks } = useUnassignedPacks()

  return (
    <div className="max-w-lg mx-auto my-8">
      <PackingLists trips={user.trips || []} />
      <LegacyPacks packs={legacyPacks || []} />
    </div>
  )
}
