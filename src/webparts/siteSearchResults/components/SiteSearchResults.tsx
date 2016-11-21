import * as React from 'react';
import { css,   DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  ImageFit } from 'office-ui-fabric-react';


import styles from '../SiteSearchResults.module.scss';
import { ISiteSearchResultsWebPartProps } from '../ISiteSearchResultsWebPartProps';

export interface ISiteSearchResultsProps extends ISiteSearchResultsWebPartProps {
}

export default class SiteSearchResults extends React.Component<ISiteSearchResultsProps, {}> {
  public render(): JSX.Element {

    let previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: 'dist/document-preview.png',
          iconSrc: 'dist/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };

    return (
      <div className={styles.siteSearchResults}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to SharePoint!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                {this.props.description}
              </p>
              <a
                className={css('ms-Button', styles.button)}
                href='https://github.com/SharePoint/sp-dev-docs/wiki'
              >
                <span className='ms-Button-label'>Learn more</span>
              </a>
              <DocumentCard onClickHref='http://bing.com'>
                <DocumentCardPreview { ...previewProps } />
                <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx'/>
                <DocumentCardActivity
                  activity='Created Feb 23, 2016'
                  people={
                    [
                      { name: 'Kat Larrson', profileImageSrc: 'dist/avatar-kat.png' }
                    ]
                  }
                />
              </DocumentCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
