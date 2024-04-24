import * as React from 'react';
import { Entity } from '@strapi/types';
import { MessageDescriptor } from 'react-intl';
import { UseQueryResult } from 'react-query';
import { ConfirmDialogPublishAllProps } from './ConfirmBulkActionDialog';
import type { BulkActionComponent } from '../../../../../core/apis/content-manager';
interface EntryValidationTextProps {
    validationErrors?: Record<string, MessageDescriptor>;
    isPublished?: boolean;
}
interface SelectedEntriesTableContentProps {
    isPublishing?: boolean;
    rowsToDisplay?: TableRow[];
    entriesToPublish?: Entity.ID[];
    validationErrors: Record<string, EntryValidationTextProps['validationErrors']>;
}
interface SelectedEntriesModalContentProps extends Pick<SelectedEntriesTableContentProps, 'validationErrors'> {
    refetchModalData: UseQueryResult['refetch'];
    setEntriesToFetch: React.Dispatch<React.SetStateAction<Entity.ID[]>>;
    setSelectedListViewEntries: React.Dispatch<React.SetStateAction<Entity.ID[]>>;
    toggleModal: ConfirmDialogPublishAllProps['onToggleDialog'];
}
interface TableRow {
    id: Entity.ID;
    publishedAt: string | null;
}
declare const SelectedEntriesModalContent: ({ toggleModal, refetchModalData, setEntriesToFetch, setSelectedListViewEntries, validationErrors, }: SelectedEntriesModalContentProps) => import("react/jsx-runtime").JSX.Element;
declare const PublishAction: BulkActionComponent;
export { PublishAction, SelectedEntriesModalContent };
