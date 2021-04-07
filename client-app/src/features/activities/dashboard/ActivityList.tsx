/* eslint-disable react/jsx-no-undef */
import { SyntheticEvent } from 'react'
import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps
{
    activities:IActivity[];
    selectActivity:(id:string) => void;
    deleteActivity:(event:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
    submitting:boolean,
    target:string
}

export const ActivityList:React.FC<IProps> = ({
    activities,
    selectActivity,
    deleteActivity,
    submitting,
    target
    }) => {
    return (
        <Segment clearing>
            <Item.Group divided>
                {activities.map(act=>(
                <Item key={act.id}>
                <Item.Content>
                    <Item.Header as='a'>{act.title}</Item.Header>
                    <Item.Meta>{act.date}</Item.Meta>
                    <Item.Description>
                    <div>{act.description}</div>
                    <div>{act.city}, {act.venue}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button 
                        floated='right' 
                        content='View' 
                        color='blue' 
                        onClick={()=>selectActivity(act.id)}
                        />
                        <Button
                        name={act.id} 
                        loading={target===act.id && submitting}
                        floated='right' 
                        content='Delete' 
                        color='red' 
                        onClick={(e)=>deleteActivity(e,act.id)}
                        />
                            <Label
                            basic 
                            content={act.category}
                            />
                    </Item.Extra>
                </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
