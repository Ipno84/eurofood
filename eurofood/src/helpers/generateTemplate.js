import { ScrollView, Text, View } from 'react-native';

import Components from './../components';
import React from 'react';

const COMPONENTS = { ...Components, ScrollView, View, Text };

export default function generateTemplate(
    componentsMap,
    keys = [],
    additionalProps = null
) {
    try {
        let Components = [];
        if (!componentsMap) return null;
        componentsMap.forEach((template, i) => {
            if (template.component) {
                keys.push(`${template.component}_${i}`);
                const keyProps = keys.join('-');
                const Component = COMPONENTS[template.component];
                if (Component) {
                    if (additionalProps) {
                        template.props = {
                            ...template.props,
                            ...additionalProps
                        };
                    }
                    if (template.props) {
                        const { children, ...Props } = template.props;
                        if (!template.props.children) {
                            Components.push(
                                <Component key={keyProps} {...Props} />
                            );
                        } else {
                            if (typeof children === 'string') {
                                Components.push(
                                    <Component key={keyProps} {...Props}>
                                        {children}
                                    </Component>
                                );
                            } else if (typeof children === 'object') {
                                Components.push(
                                    <Component key={keyProps} {...Props}>
                                        {generateTemplate(children, keys)}
                                    </Component>
                                );
                            }
                        }
                    } else {
                        Components.push(<Component key={keyProps} />);
                    }
                }
            }
        });
        return <>{Components}</>;
    } catch (error) {
        return null;
    }
}
