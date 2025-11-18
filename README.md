
#### What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type দুটোই অবজেক্টের ধরন নির্ধারণ করতে ব্যবহার করা হয়।
Interface সহজেই অন্য interface বা class থেকে সম্প্রসারণ (extends) করা যায়।
Type alias ব্যবহার করে আমরা একাধিক type কে মিলিয়ে (&) নতুন type তৈরি করতে পারি।
Interface একাধিকবার declare করলে merge হয়, কিন্তু type একবার define করলে পরিবর্তন করা যায় না।
Class সাধারণত interface implement করতে পারে, type সরাসরি implement করা যায় না।


### What is the use of the keyof keyword in TypeScript? Provide an example.

keyof keyword দিয়ে কোনো object type-এর সব key কে type হিসেবে বের করা যায়।
উদাহরণস্বরূপ, type UserKeys = keyof User; দিলে UserKeys হবে "id" | "name" | "email"।
এটি type-safe ফাংশন তৈরি করতে সাহায্য করে।
যে কোনো key দিয়ে object-এর property access করলে TypeScript compile-time-এ ত্রুটি ধরতে পারে।
এভাবে কোড আরও নিরাপদ এবং predictable হয়।


