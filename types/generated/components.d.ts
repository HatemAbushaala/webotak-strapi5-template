import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTenants extends Struct.ComponentSchema {
  collectionName: 'components_elements_tenants';
  info: {
    displayName: 'tenants';
    icon: 'apps';
  };
  attributes: {
    first_row_images: Schema.Attribute.Media<'images' | 'files', true>;
    second_row_images: Schema.Attribute.Media<'images' | 'files', true>;
    third_row_images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface ElementsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'star';
  };
  attributes: {
    author: Schema.Attribute.String;
    author_role: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    comment: Schema.Attribute.Text;
  };
}

export interface OptionsMenu extends Struct.ComponentSchema {
  collectionName: 'components_options_menus';
  info: {
    displayName: 'menu';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OptionsSmtpSettings extends Struct.ComponentSchema {
  collectionName: 'components_options_smtp_settings';
  info: {
    displayName: 'smtpSettings';
    icon: 'align-justify';
  };
  attributes: {
    email: Schema.Attribute.String;
    host: Schema.Attribute.String;
    mailTo: Schema.Attribute.String;
    password: Schema.Attribute.String;
  };
}

export interface OptionsSocialIcons extends Struct.ComponentSchema {
  collectionName: 'components_options_social_icons';
  info: {
    description: '';
    displayName: 'social_icons';
    icon: 'share-alt';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'twitter', 'linkedin']
    >;
    link: Schema.Attribute.String;
  };
}

export interface PagesCards extends Struct.ComponentSchema {
  collectionName: 'components_pages_cards';
  info: {
    displayName: 'cards';
    icon: 'border-all';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface PagesContactForm extends Struct.ComponentSchema {
  collectionName: 'components_pages_contact_forms';
  info: {
    displayName: 'contact-form';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesCta extends Struct.ComponentSchema {
  collectionName: 'components_pages_cta';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    variation: Schema.Attribute.Enumeration<
      ['small', 'medium', 'two-columns']
    > &
      Schema.Attribute.DefaultTo<'small'>;
  };
}

export interface PagesListItem extends Struct.ComponentSchema {
  collectionName: 'components_pages_list_items';
  info: {
    description: '';
    displayName: 'ListItem';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface PagesLists extends Struct.ComponentSchema {
  collectionName: 'components_pages_lists';
  info: {
    description: '';
    displayName: 'list';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'pages.list-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface PagesQuery extends Struct.ComponentSchema {
  collectionName: 'components_pages_query';
  info: {
    description: '';
    displayName: 'Query';
  };
  attributes: {
    description: Schema.Attribute.Text;
    limit: Schema.Attribute.Integer;
    query: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Text;
  };
}

export interface PagesSocialIcons extends Struct.ComponentSchema {
  collectionName: 'components_pages_social_icons';
  info: {
    displayName: 'social_icons';
    icon: 'icons';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['facebook', 'linkedin', 'instagram']>;
    link: Schema.Attribute.String;
  };
}

export interface PagesTeams extends Struct.ComponentSchema {
  collectionName: 'components_pages_teams';
  info: {
    description: '';
    displayName: 'teams';
    icon: 'sitemap';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    profile_image: Schema.Attribute.Media<'images'>;
    social_icons: Schema.Attribute.Component<'pages.social-icons', true>;
  };
}

export interface SectionsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_about';
  info: {
    description: '';
    displayName: 'About Section';
    icon: 'info-circle';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headingBold: Schema.Attribute.String & Schema.Attribute.Required;
    headingEnd: Schema.Attribute.String;
    headingStart: Schema.Attribute.String;
    partnerLogos: Schema.Attribute.Media<'images', true>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'ABOUT US'>;
    trustedByText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by'>;
  };
}

export interface SectionsConsultation extends Struct.ComponentSchema {
  collectionName: 'components_sections_consultations';
  info: {
    displayName: 'Consultation Section';
    icon: 'calendar';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    boldTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'consultation'>;
    calendlyUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://calendly.com/your-account/15min'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Book a 15-min investor'>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ Section';
    icon: 'question-circle';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/contact'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ask your own question'>;
    faqs: Schema.Attribute.Component<'elements.faq-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'FAQs'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Main homepage hero section';
    displayName: 'Hero Section';
    icon: 'heading';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get started'>;
    showOverlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text;
    titleBold: Schema.Attribute.String & Schema.Attribute.Required;
    titleEnd: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface SeoSeoInfo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_infos';
  info: {
    description: '';
    displayName: 'SEO Info';
    icon: 'ad';
  };
  attributes: {
    meta_description: Schema.Attribute.String & Schema.Attribute.Required;
    page_title: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.faq-item': ElementsFaqItem;
      'elements.tenants': ElementsTenants;
      'elements.testimonials': ElementsTestimonials;
      'options.menu': OptionsMenu;
      'options.smtp-settings': OptionsSmtpSettings;
      'options.social-icons': OptionsSocialIcons;
      'pages.cards': PagesCards;
      'pages.contact-form': PagesContactForm;
      'pages.cta': PagesCta;
      'pages.list-item': PagesListItem;
      'pages.lists': PagesLists;
      'pages.query': PagesQuery;
      'pages.social-icons': PagesSocialIcons;
      'pages.teams': PagesTeams;
      'sections.about-us': SectionsAboutUs;
      'sections.consultation': SectionsConsultation;
      'sections.faq': SectionsFaq;
      'sections.hero': SectionsHero;
      'seo.seo-info': SeoSeoInfo;
    }
  }
}
