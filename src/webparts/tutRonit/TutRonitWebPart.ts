import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TutRonitWebPart.module.scss';
import * as strings from 'TutRonitWebPartStrings';

export interface ITutRonitWebPartProps {
  description: string;
  bigSecret: string;
}

export default class TutRonitWebPart extends BaseClientSideWebPart<ITutRonitWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.tutRonit }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>

              <h2>${ this.properties.bigSecret }</h2>

            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', { label: strings.DescriptionFieldLabel }),
                PropertyPaneTextField('bigSecret', { label: 'big secret here' }),
              ]
            }
          ]
        }
      ]
    };
  }
}
