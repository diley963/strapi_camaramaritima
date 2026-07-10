import type { Schema, Struct } from '@strapi/strapi';

export interface AffiliatesBenefit extends Struct.ComponentSchema {
  collectionName: 'components_affiliates_benefits';
  info: {
    displayName: 'benefit';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AffiliatesMembershipPlan extends Struct.ComponentSchema {
  collectionName: 'components_affiliates_membership_plans';
  info: {
    displayName: 'membershipPlan';
    icon: 'priceTag';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean;
    features: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    price: Schema.Attribute.String;
  };
}

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    description: 'Datos de contacto';
    displayName: 'contactInfo';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    city: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    mapUrl: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface ContactSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_links';
  info: {
    description: 'Enlace a red social';
    displayName: 'socialLink';
    icon: 'share';
  };
  attributes: {
    network: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'linkedin', 'x', 'youtube', 'whatsapp', 'other']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePurposeBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_purpose_blocks';
  info: {
    displayName: 'purposeBlock';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    description: 'Tarjeta individual para listas de servicios o beneficios';
    displayName: 'card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_grids';
  info: {
    description: 'Grupo de tarjetas';
    displayName: 'cardGrid';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.card', true>;
    intro: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Llamado a la accion';
    displayName: 'cta';
    icon: 'cursor';
  };
  attributes: {
    actions: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsDownload extends Struct.ComponentSchema {
  collectionName: 'components_sections_downloads';
  info: {
    description: 'Archivo descargable';
    displayName: 'download';
    icon: 'download';
  };
  attributes: {
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    description: 'Pregunta frecuente individual';
    displayName: 'faqItem';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: 'Listado de preguntas frecuentes';
    displayName: 'faqSection';
    icon: 'message';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_galleries';
  info: {
    description: 'Galeria de imagenes';
    displayName: 'gallery';
    icon: 'landscape';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Encabezado principal de pagina';
    displayName: 'hero';
    icon: 'star';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    eyebrow: Schema.Attribute.String;
    primaryAction: Schema.Attribute.Component<'shared.link', false>;
    secondaryAction: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTextSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_sections';
  info: {
    description: 'Bloque de contenido editorial';
    displayName: 'textSection';
    icon: 'write';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'shared.image-block', false>;
    layout: Schema.Attribute.Enumeration<
      ['text', 'image-left', 'image-right']
    > &
      Schema.Attribute.DefaultTo<'text'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_blocks';
  info: {
    description: 'Imagen con texto alternativo y pie opcional';
    displayName: 'imageBlock';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'Enlace reutilizable para botones, menus y llamados a la accion';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'text']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_steps';
  info: {
    displayName: 'processStep';
    icon: 'stack';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Campos basicos de SEO para paginas y contenidos';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stat';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    displayName: 'timelineItem';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'affiliates.benefit': AffiliatesBenefit;
      'affiliates.membership-plan': AffiliatesMembershipPlan;
      'contact.contact-info': ContactContactInfo;
      'contact.social-link': ContactSocialLink;
      'home.purpose-block': HomePurposeBlock;
      'sections.card': SectionsCard;
      'sections.card-grid': SectionsCardGrid;
      'sections.cta': SectionsCta;
      'sections.download': SectionsDownload;
      'sections.faq-item': SectionsFaqItem;
      'sections.faq-section': SectionsFaqSection;
      'sections.gallery': SectionsGallery;
      'sections.hero': SectionsHero;
      'sections.text-section': SectionsTextSection;
      'shared.image-block': SharedImageBlock;
      'shared.link': SharedLink;
      'shared.process-step': SharedProcessStep;
      'shared.seo': SharedSeo;
      'shared.stat': SharedStat;
      'shared.timeline-item': SharedTimelineItem;
    }
  }
}
