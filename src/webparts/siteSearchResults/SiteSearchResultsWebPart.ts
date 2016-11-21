import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'siteSearchResultsStrings';
import SiteSearchResults, { ISiteSearchResultsProps } from './components/SiteSearchResults';
import { ISiteSearchResultsWebPartProps } from './ISiteSearchResultsWebPartProps';

export default class SiteSearchResultsWebPart extends BaseClientSideWebPart<ISiteSearchResultsWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<ISiteSearchResultsProps> = React.createElement(SiteSearchResults, {
      description: this.properties.description
    });

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
