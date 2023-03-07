import { Button } from '@/components/shared/Button'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'
import { ReactIcon } from '@/icons/React'
import { SolidIcon } from '@/icons/Solid'
import { VueIcon } from '@/icons/Vue'
import { Box, Container, HStack, panda, Stack } from '@/panda/jsx'
import Link from 'next/link'
import { MdContentCopy } from 'react-icons/md'

export const Hero = () => (
  <Box
    backgroundImage={{ base: 'none', md: 'url(/images/hero.svg)' }}
    _dark={{
      backgroundImage: { base: 'none', md: 'url(/images/hero_dark.svg)' },
    }}
    backgroundPosition="calc(50% + 250px) 25px"
    backgroundRepeat="no-repeat"
  >
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '8', md: '10' }} maxW="xl">
        <Stack gap="5">
          <Heading textStyle={{ base: '4xl', md: '5xl' }} fontWeight="semibold">
            Get fully customizable, <panda.span color="accent.default">accessible</panda.span> and{' '}
            <panda.span color="accent.default">unstyled</panda.span> UI components
          </Heading>
          <Text textStyle={{ base: 'md', md: 'lg' }} color="fg.muted">
            Ark UI is a headless library for building reusable, scalable Design Systems that works
            in any framework.
          </Text>
        </Stack>
        <Stack gap="8" width="100%">
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap="3"
            alignItems="stretch"
            width="full"
          >
            <Link href="/docs/react/overview/introduction">
              <Button size={{ base: 'lg', md: 'xl' }} width="full">
                Get Started
              </Button>
            </Link>
            <HStack
              background="bg.surface"
              borderWidth="1px"
              borderRadius="lg"
              px="5"
              color="fg.emphasized"
              justify="center"
              minH="11"
            >
              <Text fontWeight="medium">npm i @ark-ui/react</Text>
              <MdContentCopy />
            </HStack>
          </Stack>
          <HStack gap="8">
            {[
              { framework: 'React', icon: <ReactIcon /> },
              { framework: 'Vue', icon: <VueIcon /> },
              { framework: 'Solid', icon: <SolidIcon /> },
            ].map(({ framework, icon }) => (
              <HStack key={framework}>
                {icon}
                <Text color="fg.muted">{framework}</Text>
              </HStack>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
