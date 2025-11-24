import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model'; // 👈 import interface

@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-component.html',
  styleUrls: ['./blog-component.scss'],
})
export class BlogComponent {
  articles: Article[] = [
    {
      id: 'java17',
      title: 'Java 17 — Features Every Backend Developer Must Know',
      excerpt:
        'Pattern matching, sealed classes, records, switch expressions — real examples with enterprise code context.',
      content: `
Java 17 is a Long-Term Support (LTS) release and is quickly becoming the default choice for modern backend systems.

Key features you should know:
- Pattern Matching for instanceof
- Records for immutable DTOs
- Sealed Classes for controlled inheritance
- Switch Expressions for concise branching

These features help reduce boilerplate, increase readability, and improve domain modelling in enterprise systems.
      `.trim(),
    },
    {
      id: 'spring-exceptions',
      title: 'Spring Boot Exception Handling — The Correct Way',
      excerpt:
        '@ControllerAdvice, custom error responses, validation handling, and global API error strategy for production.',
      content: `
Exception handling is one of the most important parts of a production Spring Boot backend.

Key building blocks:
- @ControllerAdvice + @ExceptionHandler for centralized logic
- Custom JSON error response format
- Proper validation and field error mapping
- Secure logging without exposing stack traces in API responses

A well-defined global error strategy makes APIs predictable and safe.
      `.trim(),
    },
    {
      id: 'angular-standalone',
      title: 'Angular Standalone Components — Real World Architecture',
      excerpt:
        'Project structure, service/data layers, folder strategy, and how to avoid spaghetti modules.',
      content: `
Standalone components remove the need for NgModules — but architecture still matters.

Real-world guidelines:
- Feature-based folder structure
- Smart vs. dumb components
- Core & shared boundaries
- Lazy loading using standalone routing

Applied correctly, this architecture scales perfectly for enterprise Angular apps.
      `.trim(),
    },
  ];

  activeArticle: Article | null = null;

  openArticle(article: Article): void {
    this.activeArticle = article;
  }

  closeArticle(): void {
    this.activeArticle = null;
  }
}
