import React from 'react'
import { useQuery } from "@apollo/client";
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PROJECT_QUERY from '../graphql/query/getProjects';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const { data } = useQuery(PROJECT_QUERY);

    useEffect(() => {
        if (data) setProjects(data.projects);
    }, [data]);

    return (
        <div>
            <Container id="container-projects">
                <h1>Project</h1>
                <ul>
                    {projects.map((project : any) => (
                        <li key={project.project_id}>
                            <a href={`/project/${project.project_id}`}>{project.title}</a>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}
