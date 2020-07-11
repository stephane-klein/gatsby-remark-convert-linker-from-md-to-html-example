import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { html } = markdownRemark;
    return (
        <div
            
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark: markdownRemark(id: { eq: $id } ) {
            html
        }
    }
`;

