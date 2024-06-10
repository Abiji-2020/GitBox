import type React from 'react';


/**
 * AppProps defines an interface for host(parent) component and
 * micro-frontended apps(child) to talk to each other. 
 * It allows bheaviours of the child app to be customized from the parent a]. 
 * 
 * 
 */

export interface AppProps {
    // Flag to tell if App is mounted as a standalone app
    standalone : Boolean;

    //Harness routing Id
    routingId :string;

    // App Childern. When provided, children is remote view which will be mounted under app Contexts 
    children?: React.ReactNode;

    //Active space when app is embedded
    space?: string;



}