import { Title, Text, Container, Group, Divider, Stack } from "@mantine/core";


export function AboutUsPage() {
  return (
    <>
      <Container size="md">
        <Stack align="center">
          <Title order={1}>About Us</Title>
          <Text size="xl">We offer a full spectrum of service drive, detail and specialty chemicals.</Text>
        </Stack>
        <Divider my="md" />
          
        <Stack justify="space-between" mb='lg'>
          <Title order={2}>MOC Distributors of Canada Inc.</Title>
          <Text size="md">
            Servicing the GTA since 1978, formerly known as F & M Distributors and since 2008 known as MOC Distributors of Canada. We have had the pleasure to service our OEM and independent dealers for over 40 years. The industry has been constantly changing and we have also evolved to better serve your wants and needs.
          </Text>
          <Text size="md">
            We are the Authorized distributor of MOC Products and we have a strategic advantage to meet the needs and demands of the current automotive market. We have expanded our product line to cater the ever changing and demanding needs of the automotive industry and to provide a better customer experience.
          </Text>
          <Text size="md">
            We have a strong sales and support team with a combined 100 plus years of experience in the automotive industry. We are a firm believer in training all departments in the dealership environment to help service your customers. We know that the automotive industry is evolving and always welcome feedback from our customers so we can better ourselves.
          </Text>
          <Text size="md">
            Thank you to all of our existing customers for all of your support over the years, we hope to service you for many more.
          </Text>
          <Stack gap='0px'>
            <Text size="md">
              Sincerely,
            </Text>
            <Text size="md">
              Your MOC® Distributors of Canada Team
            </Text>
          </Stack>
        </Stack>          
        <Stack justify="space-between">
          <Title order={2}>About MOC Products Company Inc.</Title>
          <Text size="md">
            MOC Products Company, Inc. (MOC®) is a leading provider of innovative products and solutions to the automotive industry. MOC® started manufacturing and distributing a handful of professional car-care products in 1954. Today MOC® maintains and manufactures over 300 products, tools and customized service-drive programs. In addition to our corporate headquarters in Los Angeles, California, we operate regional facilities throughout the United States and have a network of Distributors covering the US, Canada and numerous foreign countries. At the heart of our growth is our constant effort to provide unique and beneficial services to our customers.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
