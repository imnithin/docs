import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';
import GuidesSection from '../components/GuidesSection';
import EnhancementSection from '../components/EnhancementSection';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="Your one-stop-shop for Minecraft administration"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>setup.md</h2>
            <p>
              Your one stop shop for everything Minecraft administration, this site is not yet entirely production ready our goal by the end of the year is to cover most of the core functionality and utilities. You will most likely find placeholder pages for things we're working on including but there are complete documents within this mess too!
            </p>
            <DyteButton onClick={() => router.push('/getting-started')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="🔗 Quick Links">
            <Card
              title="About This Project"
              description="Learn about the setup.md project and the objective it tries to achieve."
              to="/about"
            />
            <Card
              title="Admincraft Discord"
              description="A Minecraft server administration community with over 5000 members."
              to="https://discord.gg/admincraft"
            />
            <Card
              title="Github Contribution"
              description="This is the section for those looking to enhance our current resources."
              to="/contribute"
            />
            <Card
              title="YouHaveTrouble's Optimisation Guide"
              description="A well respected config optimisation resource, hosted externally to setup.md"
              to="https://github.com/YouHaveTrouble/minecraft-optimization"
            />
          </Section>

          <EnhancementSection title="✨ Server Enhancements" />
          
          <GuidesSection title="📖 Completed Guides" />
          <DyteButton onClick={() => router.push('/guides/')}>
              View All Guides
          </DyteButton>

        </div>
      </div>
    </Layout>
  );
}
