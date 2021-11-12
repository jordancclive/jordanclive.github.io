/** @jsx jsx */
import HeaderExternalLinks from '@devpanther/gatsby-theme-minimal-blog/src/components//header-external-links';

import Navigation from '@devpanther/gatsby-theme-minimal-blog/src/components//navigation';
import ColorModeToggle from '@devpanther/gatsby-theme-minimal-blog/src/components/colormode-toggle';
import useMinimalBlogConfig from '@devpanther/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import { Flex } from '@theme-ui/components';
import { useColorMode, jsx } from 'theme-ui';

import HeaderTitle from './header-title';

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();

  const isDark = colorMode === `dark`;

  if (!isDark) {
    setColorMode('dark');
  }
  //   const toggleColorMode = (e: any) => {
  //     e.preventDefault();
  //     // setColorMode(isDark ? `light` : `dark`);
  //   };

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        {/* <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /> */}
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ':hover': { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </div>
    </header>
  );
};

export default Header;
