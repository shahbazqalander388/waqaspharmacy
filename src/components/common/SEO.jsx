import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = 'https://waqaspharmacy.com' }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* JSON-LD Schemas will be added here based on page type */}
    </Helmet>
  );
};

export default SEO;
