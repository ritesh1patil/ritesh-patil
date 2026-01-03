import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  from_name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  from_email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(150, "Subject must be less than 150 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const EMAILJS_SERVICE_ID = "service_f1lzc9e";
const EMAILJS_TEMPLATE_ID = "template_ne321lr";
const EMAILJS_PUBLIC_KEY = "svfOUHKNh4NFg3ppu";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Input
            {...register("from_name")}
            placeholder="Your Name"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 h-12"
          />
          {errors.from_name && (
            <p className="text-primary-foreground/80 text-sm">{errors.from_name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            {...register("from_email")}
            type="email"
            placeholder="Your Email"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 h-12"
          />
          {errors.from_email && (
            <p className="text-primary-foreground/80 text-sm">{errors.from_email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Input
          {...register("subject")}
          placeholder="Subject"
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 h-12"
        />
        {errors.subject && (
          <p className="text-primary-foreground/80 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea
          {...register("message")}
          placeholder="Your Message"
          rows={5}
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 resize-none"
        />
        {errors.message && (
          <p className="text-primary-foreground/80 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
