import React from 'react';
import { SprkAccordion, SprkAccordionItem } from '@sparkdesignsystem/spark-core-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkAccordionDocs = () => (
  <CentralColumnLayout>
    <SprkAccordion>
      <SprkAccordionItem
        heading="This is an accordion heading"
        contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
        idString="accordion-item-1"
        analyticsString="analytics_string_goes_here"
      >
        <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          This is an example of multiple HTML elements
          used for the content in an accordion item.
        </p>

        <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
          <li>
            List Item One
          </li>

          <li>
            List Item Two
          </li>

          <li>
            List Item Three
          </li>
        </ul>
      </SprkAccordionItem>

      <SprkAccordionItem
        heading="This is an accordion heading"
        contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
        idString="accordion-item-1"
        analyticsString="analytics_string_goes_here"
      >
        <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          This is an example of multiple HTML elements
          used for the content in an accordion item.
        </p>

        <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
          <li>
            List Item One
          </li>

          <li>
            List Item Two
          </li>

          <li>
            List Item Three
          </li>
        </ul>
      </SprkAccordionItem>

      <SprkAccordionItem
        heading="This is an accordion heading"
        contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
        idString="accordion-item-1"
        analyticsString="analytics_string_goes_here"
      >
        <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          This is an example of multiple HTML elements
          used for the content in an accordion item.
        </p>

        <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
          <li>
            List Item One
          </li>

          <li>
            List Item Two
          </li>

          <li>
            List Item Three
          </li>
        </ul>
      </SprkAccordionItem>
    </SprkAccordion>
  </CentralColumnLayout>
);

export default SprkAccordionDocs;