import { zodResolver } from "@hookform/resolvers/zod"
import type { ComponentProps } from "react"
import { useForm } from "react-hook-form"
import { authService } from "@/entities/auth"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/shadcn/button"
import { Card, CardContent } from "@/shared/ui/shadcn/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/shadcn/form"
import { Input } from "@/shared/ui/shadcn/input"
import { type SignInValue, signInSchema } from "../model/schemes"

type Props = ComponentProps<"div"> & {
	onSuccess?: () => void
	onError?: () => void
}

export const SignInForm = ({ onSuccess, onError, className, ...rest }: Props) => {
	const form = useForm<SignInValue>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const handleSubmit = async (data: SignInValue) => {
		try {
			const _response = await authService.signInWithPassword(data)
		} catch (_error) {}
	}

	return (
		<Card className={cn("overflow-hidden p-0", className)} {...rest}>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 md:p-8">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Добро пожаловать</h1>
								<p className="text-muted-foreground text-balance">Войдите в свою учетную запись</p>
							</div>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="m@example.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Пароль</FormLabel>
										<FormControl>
											<Input placeholder="******" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" className="w-full">
								Вход
							</Button>

							{/* TODO: add providers */}
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
