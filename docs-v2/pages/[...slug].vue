<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />

    <UPageBody prose class="pb-0">
      <ContentRenderer v-if="page.body" :value="page" />
      <hr v-if="surround?.length" class="my-8">
      <UDocsSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.body?.toc?.links?.length" #right>
      <UDocsToc :links="page.body.toc.links">
        <template #bottom>
          <div class="hidden !mt-6 lg:block space-y-6">
            <UDivider v-if="page.body?.toc?.links?.length" dashed />
          </div>
        </template>
      </UDocsToc>
    </template>
  </UPage>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
const route = useRoute()
const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne())

if (!page.value) { throw createError({ statusCode: 404, statusMessage: 'Page not found' }) }

const { data: surround } = await useAsyncData(`docs-${route.path}-surround`, () => {
  return queryContent()
    .where({ _extension: 'md', navigation: { $ne: false } })
    .findSurround(route.path.endsWith('/') ? route.path.slice(0, -1) : route.path)
}, {
  transform (surround) {
    return surround.map(doc => doc.navigation === false ? null : doc)
  }
})


const titleSuffix = `Nuxt Content${route.path.includes('/v1/') ? ' V1' : ''}`

useSeoMeta({
  title: `${page.value.title} - ${titleSuffix}`,
  ogTitle: `${page.value.title} - ${titleSuffix}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})

const headline = computed(() => findPageHeadline(page.value))
</script>