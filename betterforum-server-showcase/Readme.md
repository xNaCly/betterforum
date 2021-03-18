# Betterforum-server

## REST-API routes:

| Route                       | Method     | Body                                                | Res                   | Description:                                  |
| --------------------------- | ---------- | --------------------------------------------------- | --------------------- | --------------------------------------------- |
| */threads*                  | `GET,POST` | `{title: string, content: string, ?author: string}` | `Thread[]`,`Thread`   | get all threads, add a thread                 |
| */threads/:id*              | `GET`      | `-`                                                 | `Thread`              | get a thread by ID                            |
| */threads/:id/comments*     | `GET,POST` | `{title: string, content: string, ?author: string}` | `Comment[]`,`Comment` | get all comments from a thread, add a comment |
| */threads/:id/comments/:id* | `POST`     | `{title: string, content: string, ?author: string}` | `Comment`             | add an inline comment                         |

## Thread Model:

```typescript
export interface ThreadModel {
	id: string;
	title: string;
	content: string;
	image?: string;
	author?: string;
	createdAt: bigint;
}
```

## Comment Model:

```typescript
export interface CommentModel {
	id: string;
	thread_id: string;
	author?: string;
	title: string;
	content: string;
	comments: [];
}
```



# Behaviour for provided Thread- & Comment- authors

The provided Author `string` gets hashed by [bcrypt](https://www.npmjs.com/package/bcrypt) and a custom salt to allow the author to maintain anonymity and simultaneously allow distinguishing other users from the Thread or Comment author.

```ts
import bcrypt from "bcrypt";

const salt = "$2b$10$iYDxSlsxdjwKCjYFFkgemgVF12"

AuthorName = await bcrypt.hash(req.body.author, salt)
console.log(AuthorName)
// $2b$10$VomPDJ9NlRAR9CCBo99XqucuB8ox90Kiwfr0B/syi4le3Oc7xu2z.

```
