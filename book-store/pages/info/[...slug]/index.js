import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InfoPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [activeTab, setActiveTab] = useState('about');

  const pageTitle = slug ? slug.join(' / ') : 'Information';

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#3E2723',
      color: '#D7CCC8',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#FFFFFF',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    tab: {
      padding: '0.5rem 1rem',
      marginRight: '1rem',
      backgroundColor: '#5D4037',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    activeTab: {
      backgroundColor: '#8D6E63',
    },
    content: {
      lineHeight: '1.6',
    },
    question: {
      fontWeight: 'bold',
      marginTop: '1.5rem',
      marginBottom: '0.5rem',
      color: '#FFCCBC',
    },
    answer: {
      marginBottom: '1rem',
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div>
            <h2 style={{ color: '#FFCCBC', marginBottom: '1rem' }}>About Fazeel's Book Store</h2>
            <p>Fazeel's Book Store is your premier destination for a wide variety of books across all genres. Established in 2010, we've been serving book lovers with passion and dedication for over a decade.</p>
            <p>Our mission is to promote literacy, inspire imagination, and foster a love for reading in our community. We pride ourselves on our carefully curated selection of books, knowledgeable staff, and commitment to customer satisfaction.</p>
          </div>
        );
      case 'faq':
        return (
          <div>
            <h2 style={{ color: '#FFCCBC', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            <div style={styles.question}>Q: What are your store hours?</div>
            <div style={styles.answer}>A: We're open Monday to Saturday, 9 AM to 8 PM, and Sundays from 10 AM to 6 PM.</div>

            <div style={styles.question}>Q: Do you offer online ordering and delivery?</div>
            <div style={styles.answer}>A: Yes, we offer online ordering through our website with home delivery and in-store pickup options.</div>

            <div style={styles.question}>Q: Can I sell or donate my used books to your store?</div>
            <div style={styles.answer}>A: We do accept gently used books for store credit or donation. Please contact us for more details on our book buying policy.</div>

            <div style={styles.question}>Q: Do you host author events or book clubs?</div>
            <div style={styles.answer}>A: Yes, we regularly host author signings, readings, and book club meetings. Check our events page for upcoming activities.</div>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h2 style={{ color: '#FFCCBC', marginBottom: '1rem' }}>Contact Us</h2>
            <p><strong>Address:</strong> 123 Bookworm Lane, Literary City, BC 12345</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@fazeelsbookstore.com</p>
            <p><strong>Social Media:</strong> Follow us on Instagram, Facebook, and Twitter @FazeelsBooks</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{pageTitle}</h1>
      <div style={styles.tabContainer}>
        <button
          style={{ ...styles.tab, ...(activeTab === 'about' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('about')}
        >
          About Us
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'faq' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'contact' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>
      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}

